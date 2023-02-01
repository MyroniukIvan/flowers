import React from 'react';
import styles from './MainPage.module.scss'
import Header from './components/mainHeader'
import SubHeader from "./components/subHeader";

const Index = () => {
    return (
        <div>
            <Header/>
            <SubHeader/>
        </div>
    );
};

export default Index;

/*в папці main Page є рутовий index.tsx, якщо ти впишеш в браузері
   localhost.../mainPage - (без index) воно відкриє те що в тебе в рутовому index.tsx тобто - mainPage/index.tsx  */
// https://www.youtube.com/watch?v=KjY94sAKLlw&t=7975s&ab_channel=freeCodeCamp.org
