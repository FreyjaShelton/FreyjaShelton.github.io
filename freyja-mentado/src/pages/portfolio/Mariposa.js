import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MariposaCard() {
	return (
		<Card sx={{ maxWidth: 580 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Board Game Cafe
				</Typography>
				<Typography variant="body2" color="text.secondary">
					I am creating an online store front for a board game cafe that my wife and I want to open one day.
					The source code for the site can be found <a href="https://github.com/FreyjaMentado/BoardGameStoreFront">here.</a>
				</Typography>
			</CardContent>
		</Card>
	);
}