import { useState } from 'react'
import axios from 'axios'



export default function Prodotti() {
    const [products, setProducts] = useState([]);
    function fetchProducts() {
        axios.get('https://fakestoreapi.com/products)')
            .then((res) => setTodos(res.data))
    }
    return (
        <>

        </>
    )
}