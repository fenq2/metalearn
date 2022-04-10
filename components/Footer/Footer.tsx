import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';
import React from 'react';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className='container'>
				<div className={styles.footerWrap}>
					<Logo />
					<p className={styles.copyright}>
						&#169; 2022 Сайт сделан топовым фронтендером ин зе ворлд
					</p>
				</div>
			</div>
		</div>
	);
};

export { Footer };
