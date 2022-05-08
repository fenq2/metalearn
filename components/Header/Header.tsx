import { AuthDialog } from '../AuthDialog/AuthDialog';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { MainNav } from '../Navigation/MainNav/MainNav';
import styles from './Header.module.scss';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerWrap}>
					<Logo />
					<MainNav />
					<div className={styles.headerRight}>
						<Link href='/write'>
							<a>
								<Button
									type='button'
									text='Добавить статью'
									variant='secondary'
									animate='bubble-animate'
								/>
							</a>
						</Link>
						<AuthDialog />
					</div>
				</div>
			</div>
		</header>
	);
};

export { Header };
