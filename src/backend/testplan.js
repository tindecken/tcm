import * as Database from './Database'
import _ from 'lodash'
import store from '../store'
import { toCodeName } from '../utils/index'

async function createCategory(data){
  try {
    const db = await Database.get()
    let id = toCodeName('category', data.name)
    console.log('data.name', data.name)
    await db.find({
      selector: { _id: {$eq: id} }
    }).then(async (exist) => {
      if(exist.docs.length === 0){ //chưa tồn tại trong hệ thống --> add
        let doc = {
          _id: id,
          name: data.name,
          description: data.description,
          testsuites: [],
          type: 'category',
          user: store.state.auth.user.email
        }
        await db.put(doc)
      }else{ //id đã tồn tại trong hệ thống --> báo lỗi
        debugger
        console.log('data.name', data.name)
        throw `Category ${data.name} is already exist`
      }
    })
  }catch (error){
    throw (error)
  }
}


async function getTestPlanTree () {
  let result = []
  let categories
  const db = await Database.get()
  await db.find({
    selector: { type: 'category'}
  }).then((res) => {
    categories = res.docs
  })
  result = await Promise.all(
    categories.map(async (category, index, categories) => ({
      ...category,
      children: await db.find({
        selector: { 
          type: 'testsuite',
          category: category._id
        }
      }).then(async (res) => { //res = testsuites.docs
        let testsuites = res.docs
        return await Promise.all(
          testsuites.map(async (testsuite) => ({
            ...testsuite,
            children: _.flatten([
              ...await db.find({
                selector: {
                  type: 'testcase',
                  testsuite: testsuite._id
                }
              }).then((res) => res.docs),
              ...await db.find({
                selector: {
                  type: 'testgroup',
                  testsuite: testsuite._id
                }
              }).then(async (res) => { // res = testgroup.docs
                let testgroups = res.docs
                console.log('testgroups', testgroups)
                return await Promise.all(
                  testgroups.map(async (testgroup) => ({
                    ...testgroup,
                    children: await db.find({
                      selector: {
                        type: 'testcase',
                        testgroup: testgroup._id
                      }
                    }).then((res) => res.docs)
                  }))
                )
              })
            ])
          }))
        )
      })
    }))
  )
  return result
}

export {
    getTestPlanTree, createCategory
}