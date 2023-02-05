import '../styles/globals.css'
import type {AppProps} from 'next/app'
import SubHeader from "../src/components/subHeader";
import Header from '../src/components/header'
import Footer from "../src/components/footer";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <Header/>
            <SubHeader/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}
