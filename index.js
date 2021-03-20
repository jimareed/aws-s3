'use strict'
const AWS = require('aws-sdk')
const fs = require('fs')

var s3 = new AWS.S3()

var params = {
	Key: 'sample.csv',
	Bucket: 'jimareed-data'
}

s3.getObject(params, function(err, data) {
	if (err) {
		throw err
	}
	fs.writeFileSync('./test.txt', data.Body)
	console.log('file downloaded successfully')
})