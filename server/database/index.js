import mongo from 'mongojs'
require('dotenv').config()

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

export const database = mongo(
	`mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds239439.mlab.com:39439/bytesize`
)
