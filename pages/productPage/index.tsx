import React from 'react';
import ImagesContainer from "./components/imagesContainer";
import Promotion from "./components/promotion";
import Forum from "./components/forum";
import Map from './components/map'

const Index = () => {
    return (
        <div>
            <div>
                <ImagesContainer/>
                <Promotion/>
                <Promotion/>
                <Promotion/>
                <Forum/>
                <Map/>
            </div>
        </div>
    );
};

export default Index;

