import { LoginFormSchema } from '../../../../utils/validation/schemas';
import { Button } from '../../../Button/Button';
import styles from '../../AuthDialog.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'antd';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(LoginFormSchema),
	});
	const onSubmit = (data) => console.log(data);

	return (
		<form className={styles.form}>
			<div className='input'>
				<Controller
					name='email'
					control={control}
					render={({ field }) => {
						// return <input {...field} {...register('test')} />; ❌ double up the registration
						return (
							<Input
								{...field}
								status={!!errors.email?.message && 'error'}
								placeholder='Ваш email'
							/>
						); // ✅
					}}
				/>
				<span className={styles.inputError}>{errors.email?.message}</span>
			</div>
			<div className='input'>
				<Controller
					name='password'
					control={control}
					render={({ field }) => {
						// return <input {...field} {...register('test')} />; ❌ double up the registration
						return (
							<Input
								{...field}
								status={!!errors.password?.message && 'error'}
								placeholder='Ваш пароль'
							/>
						); // ✅
					}}
				/>
				<span className={styles.inputError}>{errors.password?.message}</span>
			</div>
			<Button
				type='submit'
				variant='main'
				text='Войти'
				animate='bubble-animate-light'
				optionalClass='authBtn'
				onClick={handleSubmit(onSubmit)}
			/>
		</form>
	);
};

export { LoginForm };
