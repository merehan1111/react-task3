import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../../axiosConfic/instance';
// import Products from './Products';

export default function Products() {
  const[counter,setCounter]=useState(0);
  const[products,setProduct]=useState([])
  useEffect(()=>{//mounting
    axiosInstance.get('/products').then((res)=>{
          setProduct(res.data)

        }).catch((err)=>{
          console.log(err);
        })

  },[])





  return (
    <div>Products
    {/* <Link to="/product/add" className='mx-5'>AddProduct</Link>
    <Link to="/product/delete">DeleteProd</Link>

    <Outlet context={[counter,setCounter]}/> */}
    {
        products.map((product)=>{
          return <p key={product.id}>
           <Link to={`/productDetails/${product.id}`}> {product.title}</Link>
            </p>
            
         
        })
    }
    </div>
  
    
  )
}
