import React from 'react';
import styles from './forum.module.scss'
import Image from "next/image";
import btnImg from '../../../../assets/allnewsBtn.svg'

const data = [
    {
        src: 'girlwithflower',
        id: 1,
        header: 'Какие цветы под запретом: что нельзя дарить',
        subheader: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        src: 'roses',
        id: 2,
        header: 'Какие цветы под запретом: что нельзя дарить',
        subheader: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
    {
        src: 'bucketofflowers',
        id: 3,
        header: 'Какие цветы под запретом: что нельзя дарить',
        subheader: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...'
    },
]
const Index = () => {
    return (
        <div>
            <div>
                <div className={styles.header}>
                    <p className={styles.h1}>Форум</p>
                    <button className={styles.p}>
                        <Image src={btnImg} alt={'btn'}/>
                    </button>
                </div>
            </div>
            <div className={styles.forumContainerWrapper}>
                {data.map((el, index) => {
                    return (
                        <div key={index} className={styles.forumContainer}>
                            <Image className={styles.forumContainerImg}
                                   src={require('../../../../assets/' + `${el.src}` + '.svg')} alt={'forum image'} width={412}
                                   height={343}/>
                            <div className={styles.forumContainerBox}>
                                <div className={styles.forumContainerHeader}>
                                    {el.header}
                                </div>
                                <div className={styles.forumContainerSubheader}>
                                    {el.subheader}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
    ;

    export default Index;