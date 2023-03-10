import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectFlowers} from "../../../redux/slice/productSlice";
import {db, storage} from "../../../firebase/config";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable
} from "@firebase/storage";
import {setDoc, Timestamp} from "@firebase/firestore";
import {doc} from "firebase/firestore";
import Layout from "../../../components/layout/Layout";
import styles from "../formStyle.module.scss"
import {flowersType} from "../../../data/data";

const EditProduct =()=> {
    const router = useRouter()
    const {id}  = router.query as {id: string};

    const flowers = useSelector(selectFlowers)
    const currentProduct = flowers.find((flower) => flower.id === id)


    const [product, setProduct] = useState(currentProduct || {});
    const editProduct=(e)=> {
        e.preventDefault()
        if (flowers.imageURL !== currentProduct.imageURL ){
            const storageRef=ref(storage, currentProduct.imageURL);
            deleteObject(storageRef)
        }

        try {
            setDoc(doc(db,'flowers',id),{
                name:product.name,
                imageURL:product.imageURL,
                flower:product.flower,
                color:product.color,
                type:product.type,
                price:product.price,
                discount:product.discount,
                createdAt: Timestamp.now().toDate()
            })
        } catch (error){
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
            // ?? ???????????????? ?? ?????? ???????????????? else ???????? - not checked, ?????????? ???????????? ?????????????? ?????? ?? ?????? ??????!
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
                <h1>?????????????????????? ????????????</h1>
                <div>
                    <form onSubmit={editProduct} className={styles.input__list} action="">
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

                            /></div>
                        <div className={styles.input__list_wrapper}>
                            <label>????????????</label>
                            <input
                                type="number"
                                placeholder="????????????"
                                name="discount"
                                required
                                value={product.discount}
                                onChange={(e => handleInputChange(e))}

                            /></div>
                        <button className='--btn-success'>??????????????????</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default EditProduct

