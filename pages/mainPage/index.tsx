import React, {useState} from 'react';
import ImagesContainer from "./components/imagesContainer";
import Promotion from "./components/promotion";
import Forum from "./components/forum";
import Map from './components/map'
import {motion} from "framer-motion";
import Cursor from "../../src/components/cursor";

const Index = () => {
    const [cursorVariant, setCursorVariant] = useState('default');
    return (
        <div>
            <motion.div
                onMouseDown={() => setCursorVariant('click')}
                onMouseUp={() => setCursorVariant('default')}
                style={{height: "100%"}}
            >
                <ImagesContainer/>
                <Promotion/>
                <Promotion/>
                <Promotion/>
                <Forum/>
                <Map/>
                <Cursor cursorVariant={cursorVariant}/>
            </motion.div>
        </div>
    );
};

export default Index;

/*в папці main Page є рутовий index.tsx, якщо ти впишеш в браузері
   localhost.../mainPage - (без index) воно відкриє те що в тебе в рутовому index.tsx тобто - mainPage/index.tsx  */
// https://www.youtube.com/watch?v=KjY94sAKLlw&t=7975s&ab_channel=freeCodeCamp.org
