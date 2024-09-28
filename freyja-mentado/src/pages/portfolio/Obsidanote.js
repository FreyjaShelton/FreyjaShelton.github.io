import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function ObsidanoteCard() {
	return (
		<CardRoot title={"Obsidanote"}>
			<Typography variant="body2" color="text.secondary">
				I am creating a note taking app that will attempt to combine 
				the graph functionality of <a href="https://obsidian.md/">Obsidian</a> with 
				the functionality of <a href="https://milanote.com/">Milanote.</a> This 
				is a creation fueled by my wife, Sephora, as she is obsessed with 
				finding the best note taking app and I am attempting to make it for her!
			</Typography>
		</CardRoot>
	);
}