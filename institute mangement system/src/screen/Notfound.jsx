import { Box, Typography } from '@mui/material'
import React from 'react'

const Notfound = () => {
  return (
    <Box sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
    <Typography variant='h2'>Not Found !</Typography>
    </Box>
  )
}

export default Notfound