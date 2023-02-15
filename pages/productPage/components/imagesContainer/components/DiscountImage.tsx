import React from 'react';
import Image from "next/image"
import styles from './DiscountBannersImage.module.scss'
import rose from '../../../../../assets/discountRose.png'

const DiscountImage = () => {
    return (
        <div  className={styles.discountImage}>
            <Image src={rose}
                   alt={'rose'}
                  />
            <p className={styles.discountImage__desc}>Знижки <span>-6%</span> на всі
                букети <span>по передзамовленню</span> на 8
                березня</p>
        </div>
    );
}

export default DiscountImage;