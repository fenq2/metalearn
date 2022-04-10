import styles from './Logo.module.scss';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<Link href='/'>
			<a className={styles.logo}>
				META<span className={styles.logoRed}>LEARN</span>
			</a>
		</Link>
	);
};

export { Logo };
