import React, {useState} from 'react';
import styles from './login.module.scss'

import {FaFacebook, FaGoogle} from "react-icons/fa";
import {
    FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect
} from "@firebase/auth";
import {useRouter} from "next/navigation";
import {auth} from "../../firebase/config";
import Layout from "../../components/layout/Layout";

const Index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useRouter()
    const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate.push('/productPage')
            })
            .catch((error) => {
                alert(error.message)
            });
    };
    const facebookProvider = new FacebookAuthProvider();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(() => {
                navigate.push('/productPage')

            }).catch((error) => {
            alert(error.message)
        });
    };

    const signInFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                // const accessToken = credential.accessToken;

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
            })
    }
    return (<Layout criteria={true}>
            <div className={styles.container}>
                <div className={styles.loginFormWrapper}>
                    <h2>Вход</h2>
                    <form onSubmit={loginUser}>
                        <input onChange={(e) => setEmail(e.target.value)}
                               value={email} placeholder='Email' required
                               type="email"/>
                        <input onChange={(e) => setPassword(e.target.value)}
                               value={password} placeholder='Пароль' required
                               type="password"/>
                        <button className='--btn-success' type="submit">вход
                        </button>
                    </form>
                    <button onClick={signInWithGoogle} className='--btn-success'>
                        <FaGoogle/></button>
                    <button onClick={signInFacebook} className='--btn-success'>
                        <FaFacebook/></button>
                    </div>
            </div>
        </Layout>

    );
}
export default Index;