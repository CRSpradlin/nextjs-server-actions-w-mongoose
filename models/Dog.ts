import mongoose from 'mongoose'

const DogSchema = new mongoose.Schema({
  name: String,
  breed: String
})

export default mongoose.models.Dog || mongoose.model('Dog', DogSchema)