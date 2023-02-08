import useFetch from "../../customHook/useFetch";
import {selectFlowers,STORE_FLOWERS} from "../../redux/slice/productSlice";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

import styles from '../../pages/productPage/productPage.module.scss'
const ViewProducts = () => {
    const {data}=useFetch('flowers','name')
    const products = useSelector(selectFlowers)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(STORE_FLOWERS({
            products:data
        }))
    },[dispatch,data])
    console.log(data)
    return (
        <div>
            {products.map((item,index)=>{
                return(
                    <div key={item.id}>
                        <div  className={styles.relative}>
                            <img src={item.imageURL} alt={'red'} width={336} height={321}/>
                            <p className={styles.alignTextLeft}>{item.name}</p>
                            <p className={styles.alignTextLeft}>{item.flower}</p>
                            <p className={styles.alignTextLeft}>{item.type}</p>
                            <p className={styles.alignTextLeft}>{item.price}</p>
                            <p className={styles.alignTextLeft}>{item.discount}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ViewProducts;