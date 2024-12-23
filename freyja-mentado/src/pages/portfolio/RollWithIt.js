import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function RollWithItCard() {
	return (
		<CardRoot title={"Roll With It"}>
			<Typography variant="body2"  >
				A game I am creating where you play as a cute lil possum. You can roll around and use your tail as a grappling hook! This is still very much in the early stages of development.
				The source code for the game can be found <a href="https://github.com/FreyjaMentado/RollWithIt">here.</a>
			</Typography>
		</CardRoot>
	);
}