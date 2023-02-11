import React, {useEffect} from 'react';
import styles from './admin.module.scss'
import {useState} from "react";
import {addDoc, collection, deleteDoc, doc,} from "firebase/firestore";
import {FaTrash} from "react-icons/fa";
import {toast} from "react-toastify";
import Notiflix from "notiflix";
import {useDispatch, useSelector} from "react-redux";
import useFetch from "../../hooks/useFetch";
import {db} from "../../firebase/config";
import {selectAdmins, STORE_ADMINS} from "../../redux/slice/adminSlice";
import {Card} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";


const AddAdmin = () => {
    const [admin, setAdmin] = useState({
            email: '',
            name: '',
        }
    );
    // const [adminView, setAdminView] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {data} = useFetch("admins", "email")
    const admins = useSelector(selectAdmins)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            STORE_ADMINS({
                admins: data
            }))
    }, [dispatch, data]);


    const handleInputChange = (e) => {
        const {name, value} = e.target
        setAdmin({...admin, [name]: value})
    }


    const addAdmin = (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const docRef = addDoc(collection(db, "admins"), {
                email: admin.email,
                name: admin.name,
            })
            setIsLoading(false)
            setAdmin(admin)
        } catch (error) {
            console.log('error')
            setIsLoading(false)
        }
    }


    const deleteAdmin = async (id) => {
        try {
            await deleteDoc(doc(db, "admins", id))
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const confirmDeleteAdmin = (id) => {
        Notiflix.Confirm.show(
            'Видалення адміністратора',
            'Ви хочете видалити адміністратора?',
            'видалити',
            'ні',
            function okCb() {
                deleteAdmin(id)
            },
            function cancelCb() {

            },
            {
                width: '320px',
                borderRadius: '8px',
                titleColor: 'orangered',
                okButtonBackground: 'orangered',
                cssAnimationStyle: 'zoom',
                cssAnimationDuration: 500,
                // etc...
            },
        );
    }


    return (
        <>
            <div className={styles.adminTable} >
                {admins.length === 0 ? (
                    <h1 className={styles.h1}>Адміністраторів не найдено</h1>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {admins.map((product, index) => {
                            const {id, name, email} = product;
                            return (

                                <tr key={id}>
                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {name}
                                    </td>
                                    <td>{email}</td>
                                    <td className={styles.icons}>

                                        <Link href='/admin/addAdmins'>
                                            &nbsp;
                                            <FaTrash color='red' size={20} className={styles.icons}
                                                     onClick={() => confirmDeleteAdmin(id)}/>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                )}
            </div>
            {/*{isLoading && <Loader/>}*/}
            <div>
                <h1 className={styles.h1}>Добавити адміністратора</h1>
                <div className={styles.card}>
                    <form onSubmit={addAdmin}>
                        <div className={styles.form}>
                            <label> Емейл нового адміністратора</label>
                            <input
                                type="email"
                                placeholder='Email'
                                name='email'
                                required
                                defaultValue={admin.email}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <label> Емейл нового адміністратора</label>
                            <input
                                type="text"
                                placeholder="Ім'я Адміністратора"
                                name='name'
                                required
                                defaultValue={admin.name}
                                onChange={(e) => handleInputChange(e)}
                            />
                            <button className={styles.btn}>Добавити</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddAdmin;