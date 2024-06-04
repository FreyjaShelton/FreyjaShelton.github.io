import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SwashbuckleCard() {
	return (
		<Card sx={{ maxWidth: 580 }}>
			<CardContent>
				<iframe frameborder="0" src="https://itch.io/embed/2489367" width="552" height="167">
					<a href="https://freyjamentado.itch.io/swashbucklin-showdown">Swashbucklin Showdown by freyjaMentado</a>
				</iframe>
				<Typography gutterBottom variant="h5" component="div">
					Swashbucklin Showdown
				</Typography>
				<Typography variant="body2" color="text.secondary">
					A game I created for the 2024 Pirate Software Game Jam where you play 
					as a little slime that is trying to cover as much of the pirate ship in slime as she can. 
					The theme for the game jam was "It's Spreading" so I interpreted that as spreading slime all over the stage.
					I was the developer. 
					My wife, Sephora, helped me with some of the art assets.
					My friend, Lavonte Pugh, created the music.
				</Typography>
			</CardContent>
		</Card>
	);
}