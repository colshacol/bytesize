import mongo from 'mongojs'
require('dotenv').config()

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

export const database = mongo(
	`mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds239439.mlab.com:39439/bytesize`
)

export const findInDbTable = (tableName) => (query) => {
	return new Promise((resolve, reject) => {
		database[tableName].find(query, (error, docs) => {
			resolve({ error, docs })
		})
	})
}

export const findOneInDbTable = (tableName) => (query) => {
	return new Promise((resolve, reject) => {
		database[tableName].find(query, (error, docs) => {
			resolve({ error, docs })
		})
	})
}

export const insertInDbTable = (tableName) => (data) => {
	return new Promise((resolve, reject) => {
		database[tableName].insert(data, (error, docs) => {
			resolve({ error, docs })
		})
	})
}

export const updateInDbTable = (tableName) => (data) => {
	return new Promise((resolve, reject) => {
		database[tableName].update(data, (error, docs) => {
			resolve({ error, docs })
		})
	})
}

export const saveInDbTable = (tableName) => (data) => {
	return new Promise((resolve, reject) => {
		database[tableName].save(data, (error, docs) => {
			error && throw new Error(error)
			resolve(docs)
		})
	})
}

// const find = (name) => findInDbTable(name)
// const insert = (name) => insertInDbTable(name)

export const dbTable = (name) => {
	return {
		find: findInDbTable(name),
		findOne: findOneInDbTable(name),
		insert: insertInDbTable(name),
		update: updateInDbTable(name),
		save: saveInDbTable(name)
	}
}

export const dbUtils = {
	noDocs(docs) {
		return docs?.length < 1
	}
}
