import classNames from 'classnames';
import IcomoonReact from 'icomoon-react';
import Image from 'next/image';
import React, {
  EventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';

import lockSvg from '../../assets/images/svg/https.svg';
import iconSet from '../../utils/icomoon/selection.json';
import { Button } from '../Button/Button';
import styles from './AuthDialog.module.scss';
import { LoginForm } from './components/LoginForm/LoginForm';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

const AuthDialog: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formType, setFormType] = useState('auth');

  useEffect(() => {
    isModalVisible
      ? document.documentElement.classList.add('hidden')
      : document.documentElement.classList.remove('hidden');
  }, [isModalVisible]);

  const typeFormRender = (option: string): JSX.Element => {
    switch (option) {
      case 'auth': {
        return (
          <>
            <LoginForm />
            <Button
              variant="simple"
              text="Зарегистрироваться"
              optionalClass="authSwitch"
              onClick={() => setFormType('register')}
            />
          </>
        );
      }
      case 'register': {
        return (
          <>
            <RegisterForm setIsModalVisible={setIsModalVisible} />
            <Button
              variant="simple"
              text="Войти"
              optionalClass="authSwitch"
              onClick={() => setFormType('auth')}
            />
          </>
        );
      }
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = (): void => {
    setIsModalVisible(false);
    setFormType('auth');
  };

  return (
    <div>
      <Button
        type="button"
        text="Личный кабинет"
        variant="secondary"
        animate="bubble-animate"
        onClick={showModal}
      />
      <div
        onClick={handleCancel}
        className={classNames(styles.dialog, {
          [styles.active]: isModalVisible,
        })}
      >
        <div
          className={styles.dialogWindow}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            <Button
              variant="icon"
              onClick={handleCancel}
              icon={
                <IcomoonReact
                  iconSet={iconSet}
                  color="#292929"
                  size={14}
                  icon="close"
                />
              }
              optionalClass="closeDialog"
            />
            <div className={styles.image}>
              <Image src={lockSvg} alt="lock" width={90} height={91} />
            </div>
            <div className={styles.title}>
              {formType === 'auth' ? 'Вход в аккаунт' : 'Регистрация'}
            </div>
          </div>
          <div className={styles.main}>{typeFormRender(formType)}</div>
        </div>
      </div>
    </div>
  );
};

export { AuthDialog };
