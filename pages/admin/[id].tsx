import {useRouter} from 'next/router'
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectFlowers} from "../../redux/slice/productSlice";
import {db, storage} from "../../firebase/config";
import {
    deleteObject, getDownloadURL, ref, uploadBytesResumable
} from "@firebase/storage";
import {setDoc, Timestamp} from "@firebase/firestore";
import {doc} from "firebase/firestore";
import Layout from "../../components/layout/Layout";
import styles from "./formStyle.module.scss"
import {flowersType} from "../../data/data";

const EditProduct = () => {
    const router = useRouter()
    const {id} = router.query as { id: string };

    const flowers = useSelector(selectFlowers)
    const currentProduct = flowers.find((flower) => flower.id === id)


    const [product, setProduct] = useState(currentProduct || {});
    const editProduct = (e) => {
        e.preventDefault()
        if (flowers.imageURL !== currentProduct.imageURL) {
            const storageRef = ref(storage, currentProduct.imageURL);
            deleteObject(storageRef)
        }

        try {
            setDoc(doc(db, 'flowers', id), {
                name: product.name,
                imageURL: product.imageURL,
                flower: product.flower,
                color: product.color,
                type: product.type,
                price: product.price,
                discount: product.discount,
                createdAt: Timestamp.now().toDate()
            })
        } catch (error) {
            console.log('error')
        }

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        const storageRef = ref(storage, `willow/${Date.now()}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {


        }, (error) => {

        }, () => {

            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setProduct({...product, imageURL: downloadURL})
            });
        });
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target
        if (e.target.checked) {
            // в селектах в лог виводить else блок - not checked, можна просто удалити лог і все гуд!
            setProduct({...product, [name]: value})
        } else {
            setProduct(product)
        }
        setProduct({...product, [name]: value})
    };


    return (
        <Layout criteria={false}>
            <div className={styles.addProduct}>
                <img src={currentProduct.imageURL} alt=""/>
                <h1>Редагування товару</h1>
                <div>
                    <form onSubmit={editProduct} className={styles.input__list} action="pages/admin/[id]">
                        <div className={styles.input__list_wrapper}>
                            <label>Назва товара</label>
                            <input type="text"
                                   placeholder='Название'
                                   name='name'
                                   required
                                   defaultValue={product.name}
                                   onChange={(e => handleInputChange(e))}
                            />
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>Изображение</label>
                            <input type="file"
                                   placeholder='Изображение товара'
                                   name='image'
                                //required
                                   onChange={(e) => handleImageChange(e)}
                            />
                            {product.imageURL === '' ? null : (<input
                                type="text"
                                // required
                                name="imageURL"
                                disabled
                                value={product.imageURL}
                            />)}
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>Різновид квітів</label>
                            <select
                                name="flower"
                                required
                                value={product.flower}
                                onChange={(e => handleInputChange(e))}
                            >
                                {flowersType.map((item, index) => {
                                    return (<option key={index} value={item.name}>{item.name}</option>)
                                })

                                }
                            </select>
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>Колір</label>
                            <select
                                name="color"
                                required
                                value={product.color}
                                onChange={(e => handleInputChange(e))}
                            >
                                <option value="black">black</option>
                                <option value="white">White</option>
                            </select>
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>Тип товара</label>
                            <select
                                name="type"
                                required
                                value={product.type}
                                onChange={(e => handleInputChange(e))}
                            >
                                <option value="квіти">Квіти</option>
                                <option value="букет">Букет</option>
                                <option value="подарунок">Подарунок</option>
                            </select>
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>Ціна</label>
                            <input
                                type="number"
                                placeholder="Цена"
                                name="price"
                                required
                                value={product.price}
                                onChange={(e => handleInputChange(e))}

                            /></div>
                        <div className={styles.input__list_wrapper}>
                            <label>Знижка</label>
                            <input
                                type="number"
                                placeholder="Скидка"
                                name="discount"
                                required
                                value={product.discount}
                                onChange={(e => handleInputChange(e))}

                            /></div>
                        <button className='--btn-success'>Сохранить</button>
                    </form>
                </div>
            </div>
        </Layout>)
}
export default EditProduct

