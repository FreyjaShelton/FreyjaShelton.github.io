import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ObsidanoteCard() {
	return (
		<Card sx={{ maxWidth: 580 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Obsidanote (Working title)
				</Typography>
				<Typography variant="body2" color="text.secondary">
					I am creating a note taking app that will attempt to combine the graph functionality of 
					<a href="https://obsidian.md/"> Obsidian</a> with the functionality of <a href="https://milanote.com/">Milanote.</a>
					This is a creation fueled by my wife, Sephora, as she is obsessed with finding the best note taking app and I am attempting to make it for her!
				</Typography>
			</CardContent>
		</Card>
	);
}