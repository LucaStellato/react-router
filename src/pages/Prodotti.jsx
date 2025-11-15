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
            <div className="row row-cols-1 row-cols-md-4 g-4 " style={{ width: 'auto', marginTop: '20px', marginBottom: '20px' }}>
                {products.map((product) => (
                    <div className="card  m-3 h-100" style={{ width: "18rem", border: '0' }}>
                        <img src={product.image} className="card-img-top" style={{ width: '200px' }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.title}</h5>

                            <h5>{product.price}€</h5>
                            <a href="#" class="btn mt-auto" style={{ backgroundColor: '#802c6e', color: 'white' }}>Dettagli</a>
                        </div>
                    </div>


                ))}
            </div>

        </>
    )
}