import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PersonalSiteCard() {
  return (
    <Card sx={{ maxWidth: 580 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          This website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I am creating this website using React and Material UI for the front end. 
		  It is being hosted using Github Pages.
        </Typography>
      </CardContent>
    </Card>
  );
}