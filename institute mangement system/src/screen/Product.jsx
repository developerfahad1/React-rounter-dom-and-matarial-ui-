import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaCard from '../component/Card'
import { Box, CircularProgress, Typography } from '@mui/material'

const Product = () => {
  const [products, setProducts] = useState(null)
  useEffect(()=>{
    axios(`https://fakestoreapi.com/products`)
    .then((res)=>{
      console.log(res.data)
      setProducts(res.data)
    }).catch((err)=>{
      console.log(err);
      
    })
    } , [])
  return (
    <Box>
    <Typography className='text-center m-5  ' variant='h3'>All Products!</Typography>
    <Box className=" d-flex justify-content-center flex-wrap gap-5 m-5">
    {products ? products.map((item)=>{
      return <MediaCard key={item.id} title={item.
        category
        } description="this is best photo" image={item.image} id={item.id} />
    }): <CircularProgress sx={{
      fontSize: "2rem"
    }} /> } 
    </Box>
    </Box>
  )
}

export default Product