import Layout from "../../components/layout/Layout";
import styles from './formStyle.module.scss'
import {useState} from "react";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable
} from "@firebase/storage";
import {db, storage} from "../../firebase/config";
import {addDoc, collection, setDoc, Timestamp,doc} from "@firebase/firestore";

import {} from "firebase/firestore";
import {flowersType} from "../../data/data";
import {useRouter} from "next/navigation";

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
    const navigate = useRouter()

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
            navigate.push('/admin/addProduct')
        } catch (error){
            alert('error')
        }
    }


    return (
        <Layout criteria={false}>
            <div className={styles.addProduct}>
                <h1>???????????????? ??????????</h1>
                <div>
                    <form onSubmit={addProduct} className={styles.input__list} action="">
                        <div className={styles.input__list_wrapper}>
                            <label>?????????? ????????????</label>
                            <input type="text"
                                   placeholder='????????????????'
                                   name='name'
                                   required
                                   defaultValue={product.name}
                                   onChange={(e => handleInputChange(e))}
                            />
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>??????????????????????</label>
                            <input type="file"
                                   placeholder='?????????????????????? ????????????'
                                   name='image'
                                //required
                                   onChange={(e)=>handleImageChange(e)}
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
                            <label>???????????????? ????????????</label>
                            <select
                                name="flower"
                                required
                                value={product.flower}
                                onChange={(e => handleInputChange(e))}
                            >
                                {flowersType.map((item,index)=>{
                                    return(<option key={index} value={item.name}>{item.name}</option>)
                                })

                                }
                            </select>
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>??????????</label>
                            <select
                                name="color"
                                required
                                value={product.color}
                                onChange={(e => handleInputChange(e))}
                            >
                                <option value="black">black </option>
                                <option value="white">White</option>
                            </select>
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>?????? ????????????</label>
                            <select
                                name="type"
                                required
                                value={product.type}
                                onChange={(e => handleInputChange(e))}
                            >
                                <option value="??????????">??????????</option>
                                <option value="??????????">??????????</option>
                                <option value="??????????????????">??????????????????</option>
                            </select>
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>????????</label>
                            <input
                                type="number"
                                placeholder="????????"
                                name="price"
                                required
                                value={product.price}
                                onChange={(e => handleInputChange(e))}

                            />
                        </div>
                        <div className={styles.input__list_wrapper}>
                            <label>???????????? % </label>
                            <input
                                type="number"
                                placeholder="???????????? %"
                                name="discount"
                                required
                                value={product.discount}
                                onChange={(e => handleInputChange(e))}

                            />
                        </div>

                        <button className='--btn-success'>??????????????????</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default AddProduct;