import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function TwisterCard() {
	return (
		<CardRoot title={"Twister"}>
			<Typography variant="body2"  >
				A game I created for the 2024 Crossroads Game Jam where you play
				as a the truck from the movie Twister and try to chase after a
				tornado and release science pods into the tornado!
				<br/>
				The source code can be found <a href="https://github.com/FreyjaShelton/Twister">here.</a>
				<br/>
				You can play the game on itch.io <a href="https://freyjashelton.itch.io/twister">here.</a>
			</Typography>
		</CardRoot>
	);
}