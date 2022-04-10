import iconSet from '../../utils/icomoon/selection.json';
import styles from './Catalog.module.scss';
import { CardItem } from './components/CardItem/CardItem';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import IcomoonReact from 'icomoon-react';
import React from 'react';

const { TabPane } = Tabs;

const Catalog = () => {
	return (
		<section className={styles.catalog}>
			<div className='container'>
				<h3 className='section-title'>Популярные технологии</h3>
				<div className='catalogTabs'>
					<Tabs defaultActiveKey='2'>
						<TabPane
							tab={
								<span>
									<IcomoonReact iconSet={iconSet} color='#292929' size={16} icon='code' />
									Frontend
								</span>
							}
							key='1'>
							<div className={styles.catalogContent}>
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
								<CardItem />
							</div>
						</TabPane>
						<TabPane
							tab={
								<span>
									<AndroidOutlined />
									Backend
								</span>
							}
							key='2'>
							<div className={styles.catalogContent}>
								<CardItem />
							</div>
						</TabPane>
						<TabPane
							tab={
								<span>
									<AndroidOutlined />
									Тестирование
								</span>
							}
							key='3'>
							<div className={styles.catalogContent}>
								<CardItem />
								<CardItem />
							</div>
						</TabPane>
					</Tabs>
				</div>
			</div>
		</section>
	);
};

export { Catalog };
