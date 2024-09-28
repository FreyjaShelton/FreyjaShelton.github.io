import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TwisterCard() {
	return (
		<Card sx={{ maxWidth: 580 }}>
			<CardContent>
				<iframe src="https://itch.io/embed/2780782" width="552" height="167" frameborder="0">
					<a href="https://freyjamentado.itch.io/twister">Twister by freyjaMentado</a>
				</iframe>
				<Typography gutterBottom variant="h5" component="div">
					Twister
				</Typography>
				<Typography variant="body2" color="text.secondary">
					A game I created for the 2024 Crossroads Game Jam where you play
					as a the truck from the movie Twister and try to chase after a
					tornado and release science pods into the tornado! The source
					code can be found <a href="https://github.com/FreyjaMentado/Twister">here.</a>
				</Typography>
			</CardContent>
		</Card>
	);
}