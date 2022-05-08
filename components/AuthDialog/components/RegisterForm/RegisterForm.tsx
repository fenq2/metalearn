import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'antd';
import { notification } from 'antd';
import IcomoonReact from 'icomoon-react';
import { setCookie } from 'nookies';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { UserApi } from '../../../../utils/api';
import { CreateUserDto } from '../../../../utils/api/types';
import iconSet from '../../../../utils/icomoon/selection.json';
import { RegisterFormSchema } from '../../../../utils/validation/schemas';
import { Button } from '../../../Button/Button';
import styles from '../../AuthDialog.module.scss';

interface IRegisterFormProps {
  setIsModalVisible: (args: boolean) => void;
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ setIsModalVisible }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(RegisterFormSchema),
  });
  const key = 'updatable';
  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setIsModalVisible(false);
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
        message: 'Регистрация успешна!',
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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        <span className={styles.inputError}>{errors.fullName?.message}</span>
      </div>
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
        disabled={!isValid || isSubmitting}
        type="submit"
        variant="main"
        text="Зарегистрироваться"
        animate="bubble-animate-light"
        optionalClass="authBtn"
      />
    </form>
  );
};

export { RegisterForm };
