import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RollWithItCard() {
	return (
		<Card sx={{ maxWidth: 580 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Roll With It
				</Typography>
				<Typography variant="body2" color="text.secondary">
					A game I am creating where you play as a cute lil possum. You can roll around and use your tail as a grappling hook! This is still very much in the early stages of development.
					The source code for the game can be found <a href="https://github.com/FreyjaMentado/RollWithIt">here.</a>
				</Typography>
			</CardContent>
		</Card>
	);
}