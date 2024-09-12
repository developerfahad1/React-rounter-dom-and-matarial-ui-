import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingleProduct from '../screen/SingleProduct';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({image , title , description , id}) {
    

  
    const navigate = useNavigate()
    const singleProduct = () => {
        console.log(id);
        navigate(`/singleproduct/${id}`)
        

    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, width: "20rem" }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {description}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button onClick={singleProduct} size="small" variant='outlined'>Show More</Button>
      </CardActions>
    </Card>
  );
}
