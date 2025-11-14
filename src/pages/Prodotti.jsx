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
            <h2 style={{ textAlign: 'center', color: '#802c6e' }}>ECCO I PRODOTTI DI BOOLIFY</h2>
            <div className="row " style={{ width: 'auto', marginTop: '20px', marginBottom: '20px' }}>
                {products.map((product) => (
                    <div className="card  m-3 H-100 border border-0" style={{ width: "18rem" }}>
                        <img src={product.image} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p classNAme="card-text">{product.description}</p>
                            <h5>{product.price}€</h5>
                            <a href="#" class="btn" style={{ backgroundColor: '#802c6e', color: 'white' }}>Dettagli</a>
                        </div>
                    </div>


                ))}
            </div>

        </>
    )
}