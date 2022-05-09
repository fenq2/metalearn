import axios from 'axios';

import { CreateUserDto, LoginDto, ResponseCreateUser } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const UserApi = {
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<
      CreateUserDto,
      { data: ResponseCreateUser }
    >('/auth/register', dto);
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post<
      LoginDto,
      { data: ResponseCreateUser }
    >('/auth/login', dto);
    return data;
  },
};
