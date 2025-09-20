import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function PathbuilderCard() {
	return (
		<CardRoot title={"Pathbuilder"}>
			<Typography variant="body2"  >
				A website that will walk you through the character creation process for Pathfinder First Edition. Inspired by DND Beyond's character creator.
				The source code for the game can be found <a href="https://github.com/FreyjaShelton/pfBuilder">here.</a>
			</Typography>
		</CardRoot>
	);
}