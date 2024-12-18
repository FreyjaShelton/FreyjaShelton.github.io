import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function SwashbuckleCard() {
	return (
		<CardRoot title={"Swashbucklin Showdown"}>
			<Typography variant="body2"  >
				A game I created for the 2024 Pirate Software Game Jam where you play
				as a little slime that is trying to cover as much of the pirate ship in slime as she can.
				The theme for the game jam was "It's Spreading" so I interpreted that as spreading slime all over the stage.
				I was the developer.
				My wife, Sephora, helped me with some of the art assets.
				My friend, Lavonte Pugh, created the music.
				<br/>
				The source code can be found <a href="https://github.com/FreyjaMentado/SlimeGame">here.</a>
				<br/>
				You can play the game on itch.io <a href="https://freyjamentado.itch.io/swashbucklin-showdown">here.</a>
			</Typography>
		</CardRoot>
	);
}