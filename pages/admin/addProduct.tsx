import Layout from "../../components/layout/Layout";
import styles from './admin.module.scss'
import {useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {db, storage} from "../../firebase/config";
import {addDoc, collection,Timestamp} from "@firebase/firestore";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name:'',
        flower:'',
        color:'',
        type:'',
        imageURL:'',
        price:null as any,
        discount:null as any,
    });

    console.log(product)
    const handleInputChange = (e) => {
        const {name,value}=e.target

        setProduct({...product,[name]:value})
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        const storageRef = ref(storage, `flowers/${Date.now()}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {

        }, (error) => {
            alert(error.message)
        }, () => {

            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setProduct({...product, imageURL: downloadURL})
                alert('success')
            });
        });
    }

    const addProduct =(e)=>{
        e.preventDefault()

        try {
            const docRef = addDoc(collection(db,'flowers'),{
                name:product.name,
                imageURL:product.imageURL,
                flower:product.flower,
                color:product.color,
                type:product.type,
                price:product.price,
                discount:product.discount,
                createdAt: Timestamp.now().toDate()
            })
            setProduct({...product})
            alert('success')
        } catch (error){
            alert('error')
        }
    }
    return (
        <Layout criteria={false}>
            <div className={styles.addProduct}>
                <h1>Добавить товар</h1>
                <div>
                    <form onSubmit={addProduct} className={styles.input__list} action="">
                        <label>Название товара</label>
                        <input type="text"
                               placeholder='Название'
                               name='name'
                               required
                               defaultValue={product.name}
                               onChange={(e => handleInputChange(e))}
                        />
                        <label>Изображение</label>

                        <input type="file"
                               placeholder='Изображение товара'
                               name='image'
                               required
                               onChange={(e)=>handleImageChange(e)}
                        />
                        {product.imageURL === '' ? null : (<input
                            type="text"
                            // required
                            name="imageURL"
                            disabled
                            value={product.imageURL}
                        />)}
                        <label>Цветы</label>
                        <select
                            name="flower"
                            required
                            value={product.flower}
                            onChange={(e => handleInputChange(e))}
                        >
                            <option value="роза">роза</option>
                            <option value="не роза">не роза</option>
                        </select>
                        <label>Цвет</label>
                        <select
                            name="color"
                            required
                            value={product.color}
                            onChange={(e => handleInputChange(e))}
                        >
                            <option value="black">black </option>
                            <option value="white">White</option>
                        </select>
                        <label>Тип товара</label>
                        <select
                            name="type"
                            required
                            value={product.type}
                            onChange={(e => handleInputChange(e))}
                        >
                            <option value="цветок">цветок</option>
                            <option value="букет">букет</option>
                        </select>
                        <label>Цена</label>
                        <input
                            type="number"
                            placeholder="Цена"
                            name="price"
                            required
                            value={product.price}
                            onChange={(e => handleInputChange(e))}

                        />
                        <label>Скидка</label>
                        <input
                            type="number"
                            placeholder="Скидка"
                            name="discount"
                            required
                            value={product.discount}
                            onChange={(e => handleInputChange(e))}

                        />
                        <button className='--btn-success'>Сохранить</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default AddProduct;