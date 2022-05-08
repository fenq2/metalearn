import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import styles from './MainLayout.module.scss';
import React from 'react';

interface IMainLayoutProps {
	children: JSX.Element;
}

const MainLayout: React.FC = ({ children }) => {
	return (
		<div className={styles.mainLayout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export { MainLayout };
