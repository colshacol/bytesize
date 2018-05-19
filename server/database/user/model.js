import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
  createdDate: { type: Date, default: Date.now },
  username: String,
  password: String,
  emailAddress: String,
  modules: [
    {
      _id: mongoose.Schema.Types.ObjectId
    }
  ]
})

UserSchema.plugin(passportLocalMongoose)

export const model = mongoose.model('User', UserSchema)
