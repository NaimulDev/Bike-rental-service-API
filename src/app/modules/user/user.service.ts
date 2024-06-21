import config from "../../config";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async (payload: IUser) => {
  const user = new User(payload);
  await user.save();
  return user;
};

const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = jwt.sign({ id: user._id, role: user.role }, config.jwt_secret, {
    expiresIn: "1h",
  });
  return { user, token };
};

const getUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

const updateUser = async (id: string, payload: Partial<IUser>) => {
  const user = await User.findByIdAndUpdate(id, payload, { new: true });
  if (!user) throw new Error("User not found");
  return user;
};

export const UserService = {
  signUp,
  login,
  getUserById,
  updateUser,
};
