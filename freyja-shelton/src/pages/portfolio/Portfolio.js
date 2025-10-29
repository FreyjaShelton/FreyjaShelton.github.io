import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SwashbuckleCard from "./Swashbuckle";
import MariposaCard from "./Mariposa";
import RollWithItCard from "./RollWithIt";
import TwisterCard from "./Twister";
import FinviCard from "./Finvi";
import Typography from '@mui/material/Typography';
import SparqCard from './Sparq';
import PathbuilderCard from './PathBuilder';

export default function Portfolio() {
	return (
		<div className="Portfolio">
			<Typography gutterBottom variant="h5" component="div" align="left">
				Professional Career
			</Typography>
			<Box>
				<Stack>
					<SparqCard />
					<FinviCard />
				</Stack>
			</Box>
			<br/>
			<Typography gutterBottom variant="h5" component="div" align="left">
				Completed Projects
			</Typography>
			<Box>
				<Stack>
					<SwashbuckleCard />
					<TwisterCard />
				</Stack>
			</Box>
			<br/>
			<Typography gutterBottom variant="h5" component="div" align="left">
				WIP Projects
			</Typography>
			<Box>
				<Stack>
					<PathbuilderCard />
					<MariposaCard />
					<RollWithItCard />
				</Stack>
			</Box>
		</div>
	);
}