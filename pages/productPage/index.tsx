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
                {/*<Promotion/>*/}
                {/*<Promotion/>*/}
                {/*<Promotion/>*/}
                {/*<Forum/>*/}
                {/*<Map/>*/}
            </div>

        </Layout>
    );
};

export default Index;

