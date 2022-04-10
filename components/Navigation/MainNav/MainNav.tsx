import styles from './MainNav.module.scss';
import React from 'react';

const MainNav = () => {
	return (
		<nav className={styles.mainNav}>
			<ul className={styles.mainNavList}>
				<li className={styles.mainNavItem}>
					<a href='/' className={styles.mainNavLink}>
						Категории
					</a>
				</li>
				<li className={styles.mainNavItem}>
					<a className={styles.mainNavLink} href='/'>
						Подписка
					</a>
				</li>
			</ul>
		</nav>
	);
};

export { MainNav };
