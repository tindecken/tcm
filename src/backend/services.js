import _ from 'lodash'
import * as Database from './Database'
import jwt from 'jsonwebtoken'
import PouchDB from 'pouchdb'

var secret = 'rivaldo'
var remoteDBURL = 'http://localhost:5984/tcm_db'
var remoteUser = 'tindecken'
var remotePassword = 'rivaldo'

const remotedb = new PouchDB(remoteDBURL, {
	skip_setup: false,
	auth: {
	  username: remoteUser,
	  password: remotePassword
	}
  })

async function authen(email, password) {
	let result = {}
	const db = await Database.get()
	console.log('db', db)
	debugger
	await db.find({
		selector: {
			"type": { $eq: 'user'},
			"email": { $eq: email },
			"password": { $eq: password },
		},
	}).then(async (data) => {
		let users = data.docs
		if (users.length > 0) {
			var token = jwt.sign({ name: users[0].name, email: users[0].email }, secret, {
				expiresIn: 86400 // expires in 24 hours
			})
			result = {
				token
			}
		} else {
			result = null
		}
	})
	return result
}

async function push() {
	const localdb = await Database.get();
	await localdb.replicate.to(remotedb).on('complete', function () {
		console.log('Replicate database from local to remote success')
	  }).on('error', function (err) {
		console.log('Replicate database from local to remote unsuccess:', err)
	  });
}
export {
	authen, push
}