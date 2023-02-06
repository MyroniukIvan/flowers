import '../styles/globals.css'
import type {AppProps} from 'next/app'
import SubHeader from "../src/components/subHeader";
import Header from '../src/components/header'
import Footer from "../src/components/footer";
import {Provider} from "react-redux";
import store from '../redux/store'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>

        <div>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </div>
        </Provider>
    )
}
