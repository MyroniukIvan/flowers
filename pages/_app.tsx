import '../styles/globals.css'
import type {AppProps} from 'next/app'
import SubHeader from "../components/subHeader";
import Header from '../components/header'
import Footer from "../components/footer";
import {Provider} from "react-redux";
import store from '../redux/store'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <SubHeader/>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </Provider>
    )
}
