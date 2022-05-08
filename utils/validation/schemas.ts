import * as yup from 'yup';

export const LoginFormSchema = yup
	.object({
		email: yup.string().email('Неверный email').required('Почта обязательна!'),
		password: yup.string().min(6, 'Длина пароля менее 6 символов!').required('Пароль обязателен!'),
	})
	.required();

export const RegisterFormSchema = yup
	.object({
		fullName: yup.string().required('Имя обязательно!'),
	})
	.required()
	.concat(LoginFormSchema);
