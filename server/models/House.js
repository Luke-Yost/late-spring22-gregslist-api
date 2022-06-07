
import mongoose from 'mongoose'
const Schema = mongoose.Schema 

export const HouseSchema = new Schema({
  cost: { type: Number, required: true},
  rooms: { type: Number, required: true},
  price: { type: Number, required: true},
  description: { type: String, required: false}
})