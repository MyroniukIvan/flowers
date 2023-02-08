import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from '../firebase/config'
import {useEffect, useState} from "react";



const useFetch = (collectionName,categoryName) => {

    const [data, setData] = useState<Array<{id: string}>>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true)

        try {
            const docRef = collection(db, collectionName);
            const q = query(docRef, orderBy(categoryName, "desc"));
            onSnapshot(q, (snapshot) => {

                const allData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(allData)
                setIsLoading(false)
            });

        } catch (error) {
            setIsLoading(false)

        }
    }
    useEffect(() => {
        getData()
    }, []);

    return{data,isLoading}

}

export default useFetch