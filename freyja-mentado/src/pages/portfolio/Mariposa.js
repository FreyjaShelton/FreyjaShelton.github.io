import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function MariposaCard() {
	return (
		<CardRoot title={"Board Game Cafe"}>
				<Typography variant="body2"  >
					I am creating an online store front for a board game cafe that my wife and I want to open one day.
					The source code for the site can be found <a href="https://github.com/FreyjaMentado/BoardGameStoreFront">here.</a>
				</Typography>
		</CardRoot>
	);
}