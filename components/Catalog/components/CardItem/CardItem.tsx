import reactLogo from '../../../../assets/images/svg/react-logo.svg';
import iconSet from '../../../../utils/icomoon/selection.json';
import { Button } from '../../../Button/Button';
import styles from './CardItem.module.scss';
import IcomoonReact from 'icomoon-react';
import Image from 'next/image';
import React from 'react';

const CardItem = () => {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<div className={styles.achievments}>
					<span>Премиум</span>
				</div>
				<div className={styles.cardHeaderRight}>
					<Button
						variant='icon'
						optionalClass='cardLike'
						icon={<IcomoonReact iconSet={iconSet} color='#C2C2C7' size={20} icon='heart' />}
					/>
				</div>
			</div>
			<div className={styles.cardMain}>
				<div className={styles.cardLogo}>
					<Image src={reactLogo} alt='react' width={34} height={39} />
				</div>
				<h4 className={styles.title}>React</h4>
				<p className={styles.description}>
					React.js — это JavaScript-библиотека для разработки пользовательского интерфейса.
				</p>
				<Button
					variant='main'
					text='Подробнее'
					animate='bubble-animate-light'
					optionalClass='catalogCardBtn'
				/>
			</div>
		</div>
	);
};

export { CardItem };
