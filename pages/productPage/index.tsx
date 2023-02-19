import React from 'react';
import ImagesContainer from "./components/imagesContainer";
import Promotion from "./components/promotion";
import Forum from "./components/forum";
import Map from './components/map'
import Layout from "../../components/layout/Layout";




const Index = () => {
    return (
        <Layout criteria={true}>
            <div className="container">
                <ImagesContainer/>

                <Promotion filter={item =>item.discount>0} title={'Акції'}/>
                <Promotion filter={item =>item.type==='подарунок'} title={'Подарунки'}/>


                <Forum/>
                <Map/>
            </div>

        </Layout>
    );
};

export default Index;

