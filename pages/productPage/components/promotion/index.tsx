import React, {useEffect, useState} from 'react';
import styles from './promotion.module.scss'
import Image from "next/image";
import vLeft from '../../../../assets/Vectorleft.svg'
import vRight from '../../../../assets/VectorRight.svg'
import Button from "../../../../components/button/button";
import Link from "next/link";
import purchaseCart from '../../../../assets/purchaseCart.svg'
import useFetch from "../../../../hooks/useFetch";
import {useDispatch, useSelector} from "react-redux";
import {
    selectFlowers,
    STORE_FLOWERS
} from "../../../../redux/slice/productSlice";


const Index = ({filter,title}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const {data} = useFetch("flowers", "name")
    const flowers = useSelector(selectFlowers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(STORE_FLOWERS({
            products: data
        }))
    }, [dispatch, data])

    const promotionalProduct = flowers.filter(filter).slice(currentPage *8,(currentPage+1)*8)

    const numPage = Math.ceil(flowers.length / 8)

    const handleClickNext =()=>{
        if (currentPage===numPage-1){
            setCurrentPage(0)
        } else {
            setCurrentPage(currentPage+1)
        }
    }
    const handleClickPrev=()=>{
        if(currentPage===0){
            setCurrentPage(numPage-1)
        } else{
            setCurrentPage(currentPage-1)
        }
    }

    console.log(flowers)
    return (<div className={styles.container}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <div className={styles.buttons}>
                    <button>
                        <Image onClick={handleClickPrev} src={vLeft} alt={'vector left'}/>
                    </button>
                    <button>
                        <Image onClick={handleClickNext} src={vRight} alt={'vector right'}/>
                    </button>
                </div>
            </div>
            <div className={styles.parent}>
                { promotionalProduct.map((el, index) => {
                    return (
                        <div key={index} className={styles.child}>
                            {/*img container*/}
                            <div>
                                <div className={styles.imgContainer}>
                                    <img className={styles.img} src={el.imageURL}
                                           alt={el.name}/>
                                    <p className={styles.absolute}>{el.discount} %</p>
                                    <p className={styles.absolute__secondary}>TOP</p>
                                </div>


                                {/*container with text + price*/}
                                <div className={styles.innerFlex}>
                                    <p className={styles.name}>
                                        {el.name}
                                    </p>
                                    <div className={styles.textBlock}>
                                        <div>
                                            <p className={styles.text}>{el.price}</p>
                                        </div>
                                        <div>
                                            <span>{el.price-(el.price * el.discount/100)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.buttons__secondary}>
                                    <div className={styles.center}>
                                        <Button label={'Заказать'}/>
                                    </div>
                                    <div className={styles.center}>
                                        <Link href={''} className={styles.link}>
                                            Быстрый заказ
                                        </Link>
                                    </div>
                                    <div className={styles.buttons__secondary_cart}>
                                        <Image src={purchaseCart} alt={'cart'}/>
                                    </div>
                                </div>
                                {/*    buttons */}
                            </div>
                        </div>)
                })}
            </div>
        </div>);
};
export default Index;