export const views = (self) => {
  return {
    get isEditingLesson() {
      console.log({ self })
      return self.activeModule.lessonDisplayState === 'editing'
    },

    get isPreviewingEditedLesson() {
      return self.activeModule.lessonDisplayState === 'previewing'
    },

    get isViewingLesson() {
      return self.activeModule.lessonDisplayState === 'viewing'
    },

    get isLessonBeingEdited() {
      console.log('----', self.activeModule.lessonDisplayState)
      return (
        self.activeModule.lessonDisplayState === 'editing' ||
        self.activeModule.lessonDisplayState === 'previewing'
      )
    }
  }
}
