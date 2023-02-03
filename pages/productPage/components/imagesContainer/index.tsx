import React from 'react';
import styles from './imagesContainer.module.scss'
import Image from "next/image";
import redBg from './assets/bgImgRed.svg'
import rose from './assets/bgImgRose.svg'
import pink from './assets/bgImgPink.svg'
import yellow from './assets/bgImgYellow.svg'
import wall from './assets/bgImgWall.svg'
import treats from './assets/treats.svg'
import flowers from './assets/flowers.svg'
import delivery from './assets/delivery.svg'


const Index = () => {
    return (
        <>
            <div className={styles.imgContainer}>
                <div className={styles.relative}>
                    <Image src={rose} alt={'rose'} width={697} height={670}/>
                    <p className={styles.alignTextRightBottom}>Скидки <span>-6%</span> на все букеты <span>по предзаказу</span> на 8
                        марта
                    </p>
                </div>
                <div className={styles.imgContainerSecondary}>
                    <div className={styles.relative}>
                        <Image src={redBg} alt={'red'} width={336} height={321}/>
                        <p className={styles.alignTextLeft}>Розы</p>
                    </div>
                    <div className={styles.relative}>
                        <Image src={pink} alt={'pink'} width={336} height={321}/>
                        <p className={styles.alignTextLeft}>Подарки</p>
                    </div>
                    <div className={styles.relative}>
                        <Image src={yellow} alt={'yellow'} width={336} height={321}/>
                        <Image className={styles.absolute} src={treats} alt={'treats'}/>
                        <p className={styles.alignTextLeft}>Подарочные корзины</p>
                    </div>
                    <div className={styles.relative}>
                        <Image src={wall} alt={'wall'} width={336} height={321}/>
                        <Image className={styles.absolute} src={flowers} alt={'flowers'}/>
                        <p className={styles.alignTextLeft}>Цветы в коробке</p>
                    </div>
                </div>
            </div>
            <div className={styles.deliveryBlock}>
                <Image src={delivery} alt={'delivery'}/>
            </div>
        </>
    );
};
export default Index;