import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userName : {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profileImg: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
})
export interface User extends mongoose.Document {
  id: string;
  userName: string;
  email: string;
  profileImg: string;
  password: string;
}
