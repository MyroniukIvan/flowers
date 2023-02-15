import React from 'react';
import styles from './forum.module.scss'
import Image from "next/image";
import btnImg from '../../../../assets/allnewsBtn.svg'
import {forum} from "../../../../data/data";

const Index = () => {
    return (<div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <p className={styles.h1}>Форум</p>
                    <button className={styles.p}>
                        <Image src={btnImg} alt={'btn'}/>
                    </button>
                </div>
            </div>
            <div className={styles.forumContainerWrapper}>
                {forum.map((el, index) => {
                    return (<div key={index} className={styles.forumContainer}>
                            <div className={styles.forumContainerImg}>
                                <Image src={require('../../../../assets/' + `${el.src}` + '.svg')} alt={'forum image'}/>
                            </div>
                            <div className={styles.forumContainerBox}>
                                <div className={styles.forumContainerHeader}>
                                    <p> {el.header}</p>
                                </div>
                                <div className={styles.forumContainerSubheader}>
                                    <p>{el.subheader}</p>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>);
};

export default Index;