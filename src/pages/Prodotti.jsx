import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'



export default function Prodotti() {
    const [products, setProducts] = useState([]);
    function fetchProducts() {
        axios.get('https://fakestoreapi.com/products)')
            .then((res) => setTodos(res.data))
    }
    return (
        <>
            {products.map((product) => (
                <div className="card" style="width: 18rem;">
                    <img src={product.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p classNAme="card-text">{product.description}</p>
                        <h6>{product}</h6>
                        <a href="#" class="btn btn-primary">Dettagli</a>
                    </div>
                </div>

            ))}

        </>
    )
}