import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Source() {
	return (
		<div>
			<p> </p>
			<Card sx={{ maxWidth: 580 }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Source Code
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<a href="https://github.com/FreyjaMentado/FreyjaMentado.github.io">Source Code</a> for this website
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}