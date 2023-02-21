import React, {useEffect} from 'react';
import ImagesContainer from "./components/imagesContainer";
import Promotion from "./components/promotion";
import Forum from "./components/forum";
import Map from './components/map'
import Layout from "../../components/layout/Layout";
import useFetch from "../../hooks/useFetch";
import {useDispatch, useSelector} from "react-redux";
import {selectFlowers, STORE_FLOWERS} from "../../redux/slice/productSlice";




const Index = () => {
    const {data} = useFetch("flowers", "name")
    const flowers = useSelector(selectFlowers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(STORE_FLOWERS({
            products: data
        }))
    }, [dispatch, data])

    const promotionalProduct = flowers.filter(item =>item.discount>0)
    const giftProducts = flowers.filter(item =>item.type==='подарунок')
    return (
        <Layout criteria={true}>
            <div className="container">
                <ImagesContainer/>

                <Promotion flowers={flowers} products={promotionalProduct} title={'Акції'}/>
                <Promotion flowers={flowers} products={giftProducts} title={'Подарунки'}/>

                <Forum/>
                <Map/>
            </div>

        </Layout>
    );
};

export default Index;

