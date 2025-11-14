import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'



export default function Prodotti() {
    const [products, setProducts] = useState([]);
    const endpoint = 'https://fakestoreapi.com/products'
    useEffect(fetchProducts, [])
    function fetchProducts() {
        axios.get(endpoint).then(response => {
            setProducts(response.data)
        })
    }
    return (
        <>
            <div className="row">
                {products.map((product) => (
                    <div className="card " style={{ width: "18rem" }}>
                        <img src={product.image} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p classNAme="card-text">{product.description}</p>
                            <h6>{product.price}</h6>
                            <a href="#" class="btn btn-primary">Dettagli</a>
                        </div>
                    </div>


                ))}
            </div>

        </>
    )
}