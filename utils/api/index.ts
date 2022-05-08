import { CreateUserDto, LoginDto, ResponseCreateUser } from './types';
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000/',
});

export const UserApi = {
	async register(dto: CreateUserDto): Promise<ResponseCreateUser> {
		const { data } = await instance.post<CreateUserDto, { data: ResponseCreateUser }>(
			'/auth/register',
			dto,
		);
		return data;
	},

	async login(dto: LoginDto) {
		const { data } = await instance.post('/auth/login', dto);
		return data;
	},
};
