import heroImg from '../../assets/images/content/hero-man.svg';
import styles from './Hero.module.scss';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className='container'>
				<div className={styles.heroContent}>
					<div className={styles.heroInfo}>
						<h1 className={styles.title}>
							Добро <span className={styles.red}>пожаловать</span> на META
							<span className={styles.red}>LEARN</span>
						</h1>
						<p className={styles.description}>
							Ресурс обучающих материалов программирования для разработчиков с практическими
							заданиями. Бери знания своего профиля у нас, ведь мы самые лучшие блеать
						</p>
					</div>
					<div className={styles.heroImg}>
						<Image src={heroImg} alt='laptop' width={300} height={320} />
					</div>
				</div>
			</div>

			<svg width='0' height='0' clipPathUnits='objectBoundingBox' style={{ display: 'block' }}>
				<clipPath id='cross'>
					<path
						d='M-5.60212 0H1443.51C1443.51 0 1559.36 601.625 1443.51 563.238C1327.66 524.851 559.937 438.149 -49 507.866L-5.60212 0Z'
						fill='#EAF0FB'
						transform='scale(1.4190, 0.780)'
					/>
				</clipPath>
			</svg>
		</div>
	);
};

export { Hero };
