import React from 'react';
import styles from './imagesContainer.module.scss'
import DiscountImage from "./components/DiscountImage";
import ImageBanner from "./components/ImageBanner";
import redRose from '../../../../assets/redRose.png'
import gift from '../../../../assets/gift.png'
import yellow from '../../../../assets/bgImgYellow.svg'

const Index = () => {

    return (  <div className={styles.container}>
            <div className={styles.image__wrapper}>
                <div className={styles.element1}>
                    <DiscountImage/>
                </div>
                <div className={styles.element2}>
                    <ImageBanner image={redRose} title={''}/>
                </div>
                <div className={styles.element3}>
                    <ImageBanner image={gift} title={''}/>
                </div>
                <div className={styles.element4}>
                    <ImageBanner image={yellow} title={''}/>
                </div>
                <div className={styles.element5}>
                    <ImageBanner image={redRose} title={''}/>
                </div>
            </div>
        </div>);
};
export default Index;