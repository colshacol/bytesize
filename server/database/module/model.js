import mongoose from 'mongoose'

const ModuleSchema = new mongoose.Schema({
  _ownerId: mongoose.Schema.Types.ObjectId,
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  lessonContent: {
    type: String,
    default: '# Write your lesson.\n\n_Write it here, man!\n'
  },
  editorContent: { type: String, default: "// write your module's code here." },
  private: { type: Boolean, default: false },
  likes: { type: Number, default: 0 }
})

export const model = mongoose.model('Module', ModuleSchema)
