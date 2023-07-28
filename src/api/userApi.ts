import api from './api';

const URL = {
  fetchUser: '/users.json',
};

export type UserData = {
  users: any;
  message: string;
  status: 'success' | 'error';
};

export const fetchUser = () => {
  return api.get<UserData>(URL.fetchUser);
};
