import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { MainNav } from '../Navigation/MainNav/MainNav';
import styles from './Header.module.scss';
import React from 'react';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerWrap}>
					<Logo />
					<MainNav />
					<div className={styles.headerRight}>
						<Button
							type='button'
							text='Личный кабинет'
							variant='secondary'
							animate='bubble-animate'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export { Header };
