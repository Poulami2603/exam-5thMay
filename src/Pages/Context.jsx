import React, { useEffect, useState,createContext } from 'react'


import axios from 'axios'

export const InitiateContex = createContext()

export const Context = ({children}) => {
    const [data, SetData] = useState([])
    const [singledata, setSingleData] = useState([])
    const ApiFetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`)
        SetData(response?.data)
    }

    const ApiSinglepage = async(id)=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setSingleData(response?.data)
    }

    useEffect(()=>{
        ApiFetchData()
    },[])

    const api ={
      data,
      singledata,
      ApiSinglepage
  }
      

  return (
    <div>
        <InitiateContex.Provider value={api}> 
                {children}
            </InitiateContex.Provider>
    </div>
  )
}

