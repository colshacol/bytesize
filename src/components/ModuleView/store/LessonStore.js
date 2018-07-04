import * as React from 'react'
import { observable, action, computed } from 'mobx'

const VIEWING = 'VIEWING'
const EDITING = 'EDITING'
const PREVIEWING = 'PREVIEWING'

type LessonViewerStateT = VIEWING | EDITING | PREVIEWING

export class LessonStore {
  @observable lessonDisplayState: string = VIEWING
  @observable
  originalLessonContent: string = '# Module Title\n\n_Write your lesson!\n'
  @observable
  editedLessonContent: string = '# Module Title\n\n_Write your lesson!\n'

  constructor() {
    this.getModuleShit()
  }

  @action
  getModuleShit = () => {
    return false
  }

  @action
  setLessonDisplayState = (which) => {
    this.lessonDisplayState = which
  }

  @action
  setEditedLessonContent = (content) => {
    this.editedLessonContent = content
  }

  @computed
  get isEditingLesson() {
    return this.lessonDisplayState === EDITING
  }

  @computed
  get isPreviewingLesson() {
    return this.lessonDisplayState === PREVIEWING
  }

  @computed
  get isViewingLEsson() {
    return this.lessonDisplayState === VIEWING
  }

  @action
  cancelEditingLessonContent = () => {
    this.editedLessonContent = this.originalLessonContent
    this.setLessonDisplayState(VIEWING)
  }

  @action
  saveEditedLessonContent = () => {
    this.originalLessonContent = this.editedLessonContent
    this.setLessonDisplayState(VIEWING)
    // TODO: Send to server.
  }

  @action
  toggleEditingLesson = () => {
    console.log('...?', this)
    this.setLessonDisplayState(this.isEditingLesson ? VIEWING : EDITING)
  }

  @action
  togglePreviewingLesson = () => {
    this.setLessonDisplayState(PREVIEWING)
  }
}
