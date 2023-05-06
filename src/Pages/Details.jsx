import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';

const Details = () => {

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [load, setLoad] = useState(true)

  const getProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response)
    setProduct(response?.data)
    setTimeout(() => {
      setLoad(false)
    }, 1500);
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      {
        load === true ? <Loader />
          :
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mx-auto my-3">
                  <div className="card mx-4 my-4">
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><strong>Category :</strong> {product.category}</li>
                      <li className="list-group-item"><strong>Rating :</strong> {product.rating.count}</li>
                      <li className="list-group-item"><strong>Price :</strong> {product.price}</li>
                    </ul>
                    <div className="card-body">
                      <Link to="/" className="btn btn-danger">Back</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </>
      }
    </>
  )
}

export default Details