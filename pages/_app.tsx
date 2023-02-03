import '../styles/globals.css'
import type {AppProps} from 'next/app'
import MainHeader from "./productPage/components/header";
import SubHeader from "./productPage/components/subHeader";
import React, {useState} from "react";
import {motion} from "framer-motion";
import Cursor from "../src/components/cursor";

export default function App({Component, pageProps}: AppProps) {
    const [cursorVariant, setCursorVariant] = useState('default');

    return (
        <motion.div
            onMouseDown={() => setCursorVariant('click')}
            onMouseUp={() => setCursorVariant('default')}
            style={{height: "100%"}}
        >
            <MainHeader/>
            <SubHeader/>
            <Component {...pageProps} />
            <Cursor cursorVariant={cursorVariant}/>
        </motion.div>
    )
}
