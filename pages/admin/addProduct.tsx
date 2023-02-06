import Layout from "../../src/components/layout/Layout";
import styles from './admin.module.scss'

const AddProduct = () => {
    return (
        <Layout criteria={false}>
            <div className={styles.input__list}  >
                <div><input type="text"/></div>
                <div><input type="text"/></div>
                <div><input type="text"/></div>
                <div><input type="text"/></div>
                <div><input type="text"/></div>
            </div>
        </Layout>
    );
}

export default AddProduct;