import React from 'react';
import styles from './imagesContainer.module.scss'
import Image from "next/image";
import redBg from './assets/bgImgRed.svg'
import rose from './assets/bgImgRose.svg'
import pink from './assets/bgImgPink.svg'
import yellow from './assets/bgImgYellow.svg'
import wall from './assets/bgImgWall.svg'

const Index = () => {
    return (
        <div className={styles.imgContainer}>
            <Image src={rose} alt={'rose'} width={697} height={650}/>
            <div className={styles.imgContainerSecondary}>
                <Image src={redBg} alt={'red'} width={336} height={321}/>
                <Image src={pink} alt={'pink'} width={336} height={321}/>
                <Image src={yellow} alt={'yellow'} width={336} height={321}/>
                <Image src={wall} alt={'wall'} width={336} height={321}/>
            </div>
        </div>
    );
};

export default Index;