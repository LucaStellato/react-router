import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function singleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    function fetchData() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response)
                setProduct(response.data)
            })
        useEffect(fetchData, [])
    }
    return (
        <>
            <h1>CIAO</h1>
        </>
    )
}