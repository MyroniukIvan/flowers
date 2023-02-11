import React from 'react';
import styles from "../footer.module.scss";

const Personal = () => {
    return (
        <div>
            <a className='footer__link' href={''}>особистий кабінет</a>
            <a className='footer__link' href={''}>історія замовлень</a>
            <a className='footer__link' href={''}>закладки</a>
            <a className='footer__link' href={''}>список новин</a>
        </div>
    );
}

export default Personal;