import { jsonify } from '#state/utilities'
import * as MODULE_CONSTS from '#state/stores/Module/consts'
import shortId from 'shortid'

export const actions = (self) => {
  const createModule = (ownerEmail) => {
    return ownerEmail |> generateModule |> self.setActiveModule
  }

  const setActiveModule = (module) => {
    self.activeModule = module
    return module
  }

  const toggleLessonEditor = () => {
    self.activeModule.lessonDisplayState =
      self.activeModule.lessonDisplayState === 'viewing' ? 'editing' : 'viewing'

    console.log(self.activeModule.lessonDisplayState)
    return self.activeModule.lessonDisplayState
  }

  const toggleEditedLessonPreview = () => {
    if (self.activeModule.lessonDisplayState === 'viewing') return

    self.activeModule.lessonDisplayState =
      self.activeModule.lessonDisplayState === 'editing'
        ? 'previewing'
        : 'editing'

    return self.activeModule.lessonDisplayState
  }

  const setEditedLessonContent = (value) => {
    self.activeModule.editedLessonContent = value
    return self.activeModule.editedLessonContent
  }

  const setEditedCodeContent = (value) => {
    self.activeModule.editedCodeContent = value
    self.activeModule.codeContent = value
    console.log(self.activeModule.codeContent)
    return self.activeModule.editedCodeContent
  }

  const saveAndToggleLessonEditor = () => {
    self.saveEditedLessonContent()
    return self.toggleLessonEditor()
  }

  const saveEditedLessonContent = () => {
    self.activeModule.lessonContent = self.activeModule.editedLessonContent
    return self.activeModule.lessonContent
  }

  const cancelEditedLessonContent = () => {
    self.activeModule.editedLessonContent = self.activeModule.lessonContent
    return self.activeModule.editedLessonContent
  }

  const cancelAndToggleLessonEditor = () => {
    self.cancelEditedLessonContent()
    return self.toggleLessonEditor()
  }

  const saveEditedCodeContent = () => {
    self.activeModule.codeContent = self.activeModule.editedCodeContent
    return self.activeModule.codeContent
  }

  return {
    jsonify: jsonify(self),
    toggleLessonEditor,
    toggleEditedLessonPreview,
    setEditedLessonContent,
    setEditedCodeContent,
    saveEditedLessonContent,
    cancelEditedLessonContent,
    saveEditedCodeContent,
    setActiveModule,
    createModule,
    saveAndToggleLessonEditor,
    cancelAndToggleLessonEditor
  }
}

const generateModule = (ownerEmail) => {
  const nowDate = Date.now()

  const newModule = {
    ownerEmail,
    sid: shortId(),
    lessonContent: MODULE_CONSTS.DEFAULT_LESSON_CONTENT,
    editedLessonContent: MODULE_CONSTS.DEFAULT_LESSON_CONTENT,
    codeContent: MODULE_CONSTS.DEFAULT_CODE_CONTENT,
    editedCodeContent: MODULE_CONSTS.DEFAULT_CODE_CONTENT,
    lessonDisplayState: 'viewing',
    codeDisplayState: 'interacting',
    createdDate: nowDate,
    updatedDate: nowDate
  }

  // TODO: Send module off to server for processing.

  return newModule
}
