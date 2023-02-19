import useFetch from "../../hooks/useFetch";
import {selectFlowers, STORE_FLOWERS} from "../../redux/slice/productSlice";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {doc, deleteDoc} from "firebase/firestore";
import {db, storage} from "../../firebase/config";
import {toast} from "react-toastify";
import styles from './admin.module.scss'
import AdminNavbar from "./components/adminNavbar/adminNavbar";
import {deleteObject, ref} from "@firebase/storage";
import Notiflix from 'notiflix';
import {FaEdit, FaTrash} from "react-icons/fa";
import Link from "next/link";

const ViewProducts = ({product}) => {
    const {data} = useFetch("flowers", "name")
    const flowers = useSelector(selectFlowers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(STORE_FLOWERS({
            products: data
        }))
    }, [dispatch, data])


    const deleteProduct = async (id, imageURL) => {
        try {
            await deleteDoc(doc(db, "flowers", id));
            const storageRef = ref(storage, imageURL);
            await deleteObject(storageRef);
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    const confirmDelete = (id, imageURL) => {
        Notiflix.Confirm.show(
            'Видалення товару',
            'Ви справді бажаєте видалити товар?',
            'Так, видалити.',
            'Ні',
            function okCb() {
                deleteProduct(id, imageURL)

            },
            function cancelCb() {
                alert('Ок, нехай буде');
            },
            {
                width: '320px',
                borderRadius: '2px',
                titleColor: 'orangered',
                okButtonBackground: 'orangered',
                cssAnimationStyle: "zoom"
                // etc...
            },
        );
    }





    return (
        <>
            <AdminNavbar/>
            <div className={styles.wrapper}>
                {data.length === 0 ? (
                    <p>Товар не знайдено</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Зображення</th>
                            <th>Назва</th>
                            <th>Колір</th>
                            <th>Тип</th>
                            <th>Ціна</th>
                            <th>Знижка %</th>
                            <th>Остаточна сума</th>
                            <th>Керування</th>
                        </tr>
                        </thead>
                        <tbody>
                        {flowers.map((flower, index) => {
                            const {
                                id,
                                name,
                                imageURL,
                                type,
                                color,
                                price,
                                discount,
                            } = flower;
                            return (
                                <tr key={id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <img src={imageURL} alt={name} style={{width: '100px'}}/>
                                    </td>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {type}
                                    </td>
                                    <td>
                                        {color}
                                    </td>
                                    <td>
                                        {price}
                                    </td>
                                    <td>
                                        {discount}%
                                    </td>
                                    <td>
                                        {price-(price * discount/100)}
                                    </td>

                                    <td className={styles.icons}>
                                        <Link href={`/admin/editProduct/${id}`}>
                                            <FaEdit color='black' size={20}/>
                                        </Link>
                                        <Link href='/admin/viewProducts'>
                                            &nbsp;
                                            <FaTrash color='black' size={20} className={styles.icons}
                                                     onClick={() => confirmDelete(id, imageURL)}/>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                )}
            </div>
        </>);
}




export default ViewProducts;

