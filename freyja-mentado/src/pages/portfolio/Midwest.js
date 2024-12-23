import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MidwestCard() {
	return (
		<Card sx={{ maxWidth: 580 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Crossroads Game Jam
				</Typography>
				<Typography variant="body2"  >
					A Game Jam for midwesterners! I am participating in this event and it runs 6/7/24 - 6/21/24.
					The theme is Severe Weather and I am going to recreate the 1996 movie Twister and have the players chase a tornado!
				</Typography>
				<Typography variant="body2"  >
					Find more details about the game jam <a href="https://itch.io/jam/crossroads-jam-2024"> here</a>
				</Typography>
			</CardContent>
		</Card>
	);
}