import classNames from 'classnames';
import IcomoonReact from 'icomoon-react';
import Image from 'next/image';
import React, { useState } from 'react';

import lockSvg from '../../assets/images/svg/https.svg';
import iconSet from '../../utils/icomoon/selection.json';
import { Button } from '../Button/Button';
import styles from './AuthDialog.module.scss';
import { AuthForm } from './components/AuthForm/AuthForm';

const AuthDialog: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formType, setFormType] = useState('login');

  const showModal = () => {
    setIsModalVisible(true);
    document.documentElement.classList.add('hidden');
  };

  const handleCancel = (): void => {
    setIsModalVisible(false);
    document.documentElement.classList.remove('hidden');
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
              {formType === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
            </div>
          </div>
          <div className={styles.main}>
            <AuthForm
              type={formType}
              setFormType={setFormType}
              handleCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AuthDialog };
