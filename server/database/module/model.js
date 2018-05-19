import mongoose from 'mongoose'

const ModuleSchema = new mongoose.Schema({
  _ownerId: mongoose.Schema.Types.ObjectId,
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  lessonContent: String,
  editorContent: String,
  private: Boolean,
  likes: Number
})

export const model = mongoose.model('Module', ModuleSchema)
