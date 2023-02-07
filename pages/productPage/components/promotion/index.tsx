import React from 'react';
import styles from './promotion.module.scss'
import Image from "next/image";
import vLeft from '../../../../assets/Vectorleft.svg'
import vRight from '../../../../assets/VectorRight.svg'
import Button from "../../../../components/button/button";
import Link from "next/link";

const data = [
    {
        id: 1,
        name: '101 красная роза',
        price: '1680 грн',
        promotion: '2800 грн',
        promotionPercentage: '-10%',
        src: `roseflower`,

    }, {
        id: 2,
        name: '25 розовых пионовидных роз',
        price: '2280 грн',
        promotion: '2800 грн',
        promotionPercentage: '-19%',
        src: `pinkflower`,

    }, {
        id: 3,
        name: 'Влюбленность',
        price: '1270 грн',
        promotion: '2800 грн',
        promotionPercentage: '-19%',
        src: `flowerWithTreats`,
    }, {
        id: 4,
        name: 'Корзина все для тебя',
        price: '2020 грн',
        promotion: '2800 грн',
        promotionPercentage: '-19%',
        src: `purpleFlower`,
    }, {
        id: 5,
        name: '101 красная роза',
        price: '2280 грн',
        promotion: '2800 грн',
        promotionPercentage: '-19%',
        src: `roseflower`,
    }, {
        id: 6,
        name: '25 розовых пионовидных роз',
        price: '2280 грн',
        promotion: '2800 грн',
        promotionPercentage: '-19%',
        src: `pinkflower`,

    }, {
        id: 7,
        name: 'Влюбленность',
        price: '1270 грн',
        promotion: '2800 грн',
        promotionPercentage: '-19%',
        src: `flowerWithTreats`,
    }, {
        id: 8,
        name: 'Корзина все для тебя',
        price: '2020 грн',
        promotion: '2800 грн',
        promotionPercentage: '-19%',
        src: `purpleFlower`,
    },
]

//add category TOP to data + display it
const Index = () => {
        return (
            <>
                <div className={styles.header}>
                    <div>
                        <h1>Акции</h1>
                    </div>
                    <div className={styles.buttons}>
                        <button>
                            <Image src={vLeft} alt={'vector left'}/>
                        </button>
                        <button>
                            <Image src={vRight} alt={'vector right'}/>
                        </button>
                    </div>
                </div>

                <div className={styles.parent}>
                    {data.map((el, index) => {
                        return (
                            <div key={index} className={styles.child}>

                                {/*img container*/}
                                <div>
                                    <div className={styles.imgContainer}>
                                        <Image src={require('../../../../assets/' + el.src + '.svg')}
                                               alt={el.name} width={315}
                                               height={340}/>
                                        <p className={styles.absolute}>{el.promotionPercentage}</p>
                                    </div>


                                    {/*container with text + price*/}
                                    <div className={styles.innerFlex}>
                                        <p className={styles.name}>
                                            {el.name}
                                        </p>
                                        <div className={styles.textBlock}>
                                            <div>
                                                <p className={styles.text}>{el.promotion}</p>
                                            </div>
                                            <div>
                                                <span>{el.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.center}>
                                        <Button label={'Заказать'}/>
                                    </div>
                                    <div className={styles.center}>
                                        <Link href={''} className={styles.link}>
                                            Быстрый заказ
                                        </Link>
                                    </div>
                                    {/*    buttons */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    };
export default Index;