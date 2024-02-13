import { User } from '../models/user';

const users: User[] = [];

export const registerUser = (username: string): User => {
  const newUser: User = { id: generateUserId(), username };
  users.push(newUser);
  return newUser;
};

const generateUserId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
