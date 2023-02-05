import React, {useState} from 'react';
import styles from "../login/login.module.scss";
import {FaFacebook, FaGoogle} from "react-icons/fa";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../firebase/config";
import {useRouter} from "next/navigation";

const Index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const navigate = useRouter()
    const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                navigate.push('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <div className={styles.loginFormWrapper}>
            <h2>Регистрация</h2>
            <form onSubmit={registerUser}>
                <input value={email} placeholder='Email' required type="email" onChange={(e)=>setEmail(e.target.value)}/>

                <input value={password} placeholder='Пароль' required type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <input value={cPassword} placeholder='Подтвердить пароль' required type="password" onChange={(e)=>setCPassword(e.target.value)}/>
                <button className='--btn-success' type="submit">Зарегистрировать</button>
            </form>

        </div>
    );
}

export default Index;