import PouchDB from 'pouchdb'
import _ from 'lodash'
import mock from './mockdata'
PouchDB.plugin(require('pouchdb-authentication'))
PouchDB.plugin(require('pouchdb-find'))


var localDBURL = 'tcm_db'
var remoteDBURL = 'http://localhost:5984/tcm_db'
var remoteUser = 'tindecken'
var remotePassword = 'rivaldo'

var localdb = null

const remotedb = new PouchDB(remoteDBURL, {
  skip_setup: false,
  auth: {
    username: remoteUser,
    password: remotePassword
  }
})

async function removeDB() {
  let localdb = new PouchDB(localDBURL)
  await remotedb.destroy()
  await localdb.destroy().then(function (response) {
    console.log('DB is destroyed', response)
  }).catch(function (err) {
    console.log(err);
  });
}

async function _create() {
  debugger
  await removeDB()
  let localdb = await new PouchDB(localDBURL)
  let remotedb = new PouchDB(remoteDBURL, {
    skip_setup: false, //true: override db on remote, false: no override
    auth: {
      username: remoteUser,
      password: remotePassword
    }
  })
  
  _.forEach(mock.users, async (user) => {
    await localdb.put({
      email: user.email,
      password: user.password,
      name: user.name,
      type: 'user',
      _id: user.id,
      categories: user.categories
    })
  })

  _.forEach(mock.categories, async (category) => {
    await localdb.put({
      name: category.name,
      description: category.description,
      user: category.user,
      type: 'category',
      _id: category.id,
      testsuites: category.testsuites
    })
  })

  _.forEach(mock.testsuites, async (testsuite) => {
    await localdb.put({
      name: testsuite.name,
      description: testsuite.description,
      user: testsuite.user,
      type: 'testsuite',
      _id: testsuite.id,
      testgroups: testsuite.testgroups,
      testcases: testsuite.testcases,
      category: testsuite.category
    })
  })

  _.forEach(mock.testgroups, async (testgroup) => {
    await localdb.put({
      name: testgroup.name,
      description: testgroup.description,
      type: 'testgroup',
      _id: testgroup.id,
      testcases: testgroup.testcases,
      testsuite: testgroup.testsuite
    })
  })

  _.forEach(mock.testcases, async (testcase) => {
    await localdb.put({
      name: testcase.name,
      description: testcase.description,
      type: 'testcase',
      _id: testcase.id,
      keywords: testcase.keywords,
      testsuite: testcase.testsuite,
      testgroup: testcase.testgroup
    })
  })

  await localdb.replicate.to(remotedb).on('complete', function () {
    console.log('Replicate database from local to remote success')
  }).on('error', function (err) {
    console.log('Replicate database from local to remote unsuccess:', err)
  });
  
  return localdb
}



export function get() {
  if (!localdb)
    localdb = _create()
  return localdb
}