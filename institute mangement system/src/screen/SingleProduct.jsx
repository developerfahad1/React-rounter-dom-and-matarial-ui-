import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
 const { id } = useParams()
 useEffect(()=>{
  axios(`https://fakestoreapi.com/products/singleproduct/${id}`).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
    
  })
 })
  return (
    <div>SingleProduct {id}</div>
  )
}

export default SingleProduct