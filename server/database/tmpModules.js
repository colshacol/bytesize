import { dbTable } from '$database'
import shortId from 'shortid'

export const tmpModules = dbTable('tmpModules')

export const insertNewModule = (sid) => async (email) => {
	const nowDate = Date.now()
	return await tmpModules.insert({
		sid: sid || shortId.generate(),
		ownerEmail: email,
		createdDate: nowDate,
		updatedDate: nowDate,
		editorContent: '// lets begin',
		lessonContent: 'Lesson goes here.'
	})
}
