export type LoginDto = {
	email: string;
	password: string;
};

export type CreateUserDto = {
	fullName: string;
} & LoginDto;

export type ResponseCreateUser = {
	email: string;
	fullName: string;
	id: string;
	token: string;
};
