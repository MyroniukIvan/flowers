import React from 'react';
import Image from "next/image"
import styles from './DiscountBannersImage.module.scss'
import rose from '../../../../../assets/discountRose.png'

const DiscountImage = () => {
    return (
        <div className={styles.discountImage}>
            <Image src={rose} alt={'rose'}/>
            <p className={styles.discountImage__desc}>Скидки <span>-6%</span> на все
                букеты <span>по предзаказу</span> на 8
                марта</p>
        </div>
    );
}

export default DiscountImage;