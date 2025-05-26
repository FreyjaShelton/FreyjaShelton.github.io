import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Source() {
	return (
		<div>
			<br/>
			<Card>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Source Code
					</Typography>
					<Typography variant="body2"  >
						This site was written in React and is using Material UI for styling. 
						<br/>
						Source Code for this website can be found <a href="https://github.com/FreyjaShelton/FreyjaShelton.github.io">here.</a>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}