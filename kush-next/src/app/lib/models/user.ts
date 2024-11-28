// models/User.ts
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  id: string;
  active: boolean; // Define the active field in the interface
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: Boolean,
    default: true, // Set the default value to true
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
