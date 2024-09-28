import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function PersonalSiteCard() {
	return (
		<CardRoot title={"This website"}>
			<Typography variant="body2" color="text.secondary">
				I am creating this website using React and Material UI for the front end.
				It is being hosted using Github Pages.
			</Typography>
		</CardRoot>
	);
}