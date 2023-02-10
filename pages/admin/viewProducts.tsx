import useFetch from "../../hooks/useFetch";
import {STORE_FLOWERS} from "../../redux/slice/productSlice";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

import DataTable from "../../components/table/table";
import {doc, deleteDoc} from "firebase/firestore";
import {db} from "../../firebase/config";
import {toast} from "react-toastify";


const ViewProducts = () => {
    const {data} = useFetch('flowers', 'name')
    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(STORE_FLOWERS({
            products: data
        }))
    }, [dispatch, data])


    console.log(data)
    return (
        <div>
            <DataTable rows={data}/>
        </div>
    );
}

export default ViewProducts;