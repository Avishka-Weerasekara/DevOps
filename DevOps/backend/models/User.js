import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastLogin: { type: Date } // new field for tracking logins
});

const User = mongoose.model("User", userSchema);
export default User;
