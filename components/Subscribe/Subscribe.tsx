import { Button } from '../Button/Button';
import styles from './Subscribe.module.scss';
import React from 'react';

const Subscribe = () => {
	return (
		<div className={styles.subscribe}>
			<div className='container'>
				<div className={styles.subscribeBlock}>
					<div className={styles.subscribeContent}>
						<h2 className={styles.title}>
							Подпишись <br />
							на наш telegram канал
						</h2>
						<p className={styles.description}>
							Direct messages, reactions, and commentsare just a fewways to make new friends on
							Vondy
						</p>
						<Button
							variant='main'
							text='Перейти в канал'
							animate='bubble-animate-light'
							optionalClass='subscribe'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Subscribe };
