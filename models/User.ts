import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password?: string; // Optional because we don't return it in API responses sometimes, or required in DB
  name: string;
  avatar?: string;
  isAdmin?: boolean;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true, lowercase: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, required: false },
  isAdmin: { type: Boolean, required: false, default: false },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
