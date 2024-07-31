import { v4 as uuidv4 } from 'uuid';

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

const users: User[] = [];

export function createUser(user: User) {
  user.id = uuidv4();

  users.push(user);
}

export function updateUser(user: User) {
  const index = users.findIndex((item) => item.id === user.id);

  users[index] = user;
}

export function getUserByEmail(email: any) {
  return users.find((item) => item.email === email);
}

export function removeUser(id: string) {
  const index = users.findIndex((item) => item.id === id);

  users.splice(index, 1);
}