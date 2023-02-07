import React from 'react';
import styles from './button.module.scss'

const Button = ({label}: { label: string }) => {
    return (
        <div>
            <button className={styles.button}>
                {label}
            </button>
        </div>
    );
};

export default Button;