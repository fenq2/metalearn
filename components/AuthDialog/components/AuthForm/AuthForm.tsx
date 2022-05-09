import { yupResolver } from '@hookform/resolvers/yup';
import { Input, notification } from 'antd';
import IcomoonReact from 'icomoon-react';
import { setCookie } from 'nookies';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useAppDispatch } from '../../../../redux/hooks';
import { setUserData } from '../../../../redux/slices/user';
import { UserApi } from '../../../../utils/api';
import {
  CreateUserDto,
  LoginDto,
  ResponseUser,
} from '../../../../utils/api/types';
import iconSet from '../../../../utils/icomoon/selection.json';
import { LoginFormSchema } from '../../../../utils/validation/schemas';
import { Button } from '../../../Button/Button';
import styles from '../../AuthDialog.module.scss';

interface IAuthFormProps {
  type: string;
  handleCancel?: () => void;
  setFormType?: (args: string) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({
  type,
  handleCancel,
  setFormType,
}) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const key = 'updatable';
  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data =
        type === 'login'
          ? await UserApi.login(dto)
          : await UserApi.register(dto);
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      dispatch(setUserData(data));
      handleCancel();
      notification.success({
        closeIcon: (
          <IcomoonReact
            iconSet={iconSet}
            color="#292929"
            size={10}
            icon="close"
          />
        ),
        icon: (
          <div className={styles.successIconNotify}>
            <IcomoonReact
              iconSet={iconSet}
              color="rgb(72, 255, 72)"
              size={10}
              icon="check"
            />
          </div>
        ),
        key,
        message:
          type === 'login' ? 'Вы успешно вошли!' : 'Регистрация успешна!',
      });
    } catch (e) {
      notification.error({
        closeIcon: (
          <IcomoonReact
            iconSet={iconSet}
            color="#292929"
            size={10}
            icon="close"
          />
        ),
        icon: (
          <div className={styles.errorIconNotify}>
            <IcomoonReact
              iconSet={iconSet}
              color="#ff4d4f"
              size={10}
              icon="close"
            />
          </div>
        ),
        key,
        message: e.response.data.message,
      });
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {type === 'register' && (
          <div className="input">
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => {
                // return <input {...field} {...register('test')} />; ❌ double up the registration
                return (
                  <Input
                    {...field}
                    status={!!errors.fullName?.message && 'error'}
                    placeholder="Ваше имя"
                    required
                  />
                ); // ✅
              }}
            />
            <span className={styles.inputError}>
              {errors.fullName?.message}
            </span>
          </div>
        )}
        <div className="input">
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              // return <input {...field} {...register('test')} />; ❌ double up the registration
              return (
                <Input
                  {...field}
                  status={!!errors.email?.message && 'error'}
                  placeholder="Ваш email"
                  type="email"
                  required
                />
              ); // ✅
            }}
          />
          <span className={styles.inputError}>{errors.email?.message}</span>
        </div>
        <div className="input">
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              // return <input {...field} {...register('test')} />; ❌ double up the registration
              return (
                <Input
                  {...field}
                  status={!!errors.password?.message && 'error'}
                  placeholder="Ваш пароль"
                  type="password"
                  required
                />
              ); // ✅
            }}
          />
          <span className={styles.inputError}>{errors.password?.message}</span>
        </div>
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="main"
          text={type === 'login' ? 'Войти' : 'Зарегистрироваться'}
          animate="bubble-animate-light"
          optionalClass="authBtn"
        />
      </form>
      <Button
        variant="simple"
        text={type === 'login' ? 'Зарегистрироваться' : 'Войти'}
        optionalClass="authSwitch"
        onClick={() => {
          reset({ fullName: '', email: '', password: '' });
          type === 'login' ? setFormType('register') : setFormType('login');
        }}
      />
    </>
  );
};

export { AuthForm };
