import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { InitiateContex } from './Context'

const Home = () => {
  const {data} = useContext(InitiateContex)

  return (
    <>
      <div className="container">
        <div className="row">
          {
            data?.map((element) => {
              return (
                <>
                  <div className="card my-4 mx-4" style={{border: '2px solid black'}}>
                    <img src={element.image} className="card-img-top" alt="..." style={{ height: '200px',width:'200px' }} />
                    <div className="card-body">
                      <h5 className="card-title">{element.title.slice(0, 10)}</h5>
                      <p className="card-text">Price : {element.price}</p>
                      <Link to={`/${element.id}`} className="btn btn-danger">Details</Link>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Home