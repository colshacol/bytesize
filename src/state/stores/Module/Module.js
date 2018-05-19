import * as t from '#state/utilities/typeUtils'
import User from '#state/stores/User'
import * as MODULE_CONSTS from '#state/stores/Module/consts'

export const Module = t.model('Module', {
  sid: t.id(),
  ownerEmail: t.optional.string(''),
  // lessonContent
  lessonContent: t.optional.string(MODULE_CONSTS.DEFAULT_LESSON_CONTENT),
  editedLessonContent: t.optional.string(MODULE_CONSTS.DEFAULT_LESSON_CONTENT),
  // codeContent
  codeContent: t.optional.string(MODULE_CONSTS.DEFAULT_CODE_CONTENT),
  editedCodeContent: t.optional.string(MODULE_CONSTS.DEFAULT_CODE_CONTENT),

  // lesson & code display state
  lessonDisplayState: t.optional.enumeration(
    'lessonDisplayState',
    MODULE_CONSTS.LESSON_DISPLAY_STATES,
    'viewing'
  ),

  codeDisplayState: t.optional.enumeration(
    'codeDisplayState',
    MODULE_CONSTS.CODE_DISPLAY_STATES,
    'editing'
  )
})
