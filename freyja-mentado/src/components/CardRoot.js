import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardRoot({ children, title }) {
	return (
			<Card  sx={{ maxWidth: 580 }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					{children}
				</CardContent>
			</Card>
	);
}