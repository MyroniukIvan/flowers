import '../styles/globals.css'
import type {AppProps} from 'next/app'
import MainHeader from "./mainPage/components/mainHeader";
import SubHeader from "./mainPage/components/subHeader";


export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <MainHeader/>
            <SubHeader/>
            <Component {...pageProps} />
        </div>
    )
}
