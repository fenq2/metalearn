import styles from './Button.module.scss';
import cx from 'classnames';
import React, { ReactElement } from 'react';

interface IButtonProps {
	type?: 'button' | 'submit' | 'reset';
	text?: string;
	onClick?: () => void;
	variant: string;
	animate?: string;
	optionalClass?: string;
	icon?: ReactElement;
}

const Button = ({ type, text, onClick, variant, animate, optionalClass, icon }: IButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type || 'button'}
			className={cx(styles.button, {
				[styles[variant]]: styles[variant],
				[styles[animate]]: styles[animate],
				[styles[optionalClass]]: styles[optionalClass],
			})}>
			<div className={styles.buttonContent}>{icon ? icon : text}</div>
		</button>
	);
};

export { Button };
