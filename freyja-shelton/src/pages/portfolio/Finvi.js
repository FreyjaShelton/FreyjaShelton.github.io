import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function FinviCard() {
	return (
		<CardRoot title={"Finvi"}>
			<Typography variant="body2">
				Managed a team of 12 developers in migrating desktop components to a
				web app. Improved development efficiency by creating a Docker script to
				automate environment setup. Built a web-based version of an existing desktop
				application, improving user accessibility. Adapted code management scripts to
				ensure compatibility with Git, replacing Mercurial.
			</Typography>
		</CardRoot>
	);
}