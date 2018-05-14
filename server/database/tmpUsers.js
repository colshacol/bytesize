import { dbTable } from '$database'
import shortId from 'shortid'
import { producer } from '$utilities/index.js'

export const tmpUsers = dbTable('tmpUsers')

export const generateUser = (email) => {
	const createdDate = Date.now()

	return {
		email,
		createdDate,
		modules: []
	}
}

export const registerNewUser = async (email) => {
	const nowDate = Date.now()
	return await tmpUsers.insert({
		email,
		modules: [],
		createdDate: nowDate
	})
}

export const addNewModuleToUser = producer((user) => {
	user.modules.push(shortId.generate())
	return user
})

export const findUserByEmail = async (email) => {
	const user = await tmpUsers.findOne({
		email
	})

	user.error && (throw new Error(user.error))
	console.log('---findUserByEmail', { user })

	return user.docs[0]
}
