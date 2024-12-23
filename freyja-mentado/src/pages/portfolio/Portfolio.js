import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SwashbuckleCard from "./Swashbuckle";
import PersonalSiteCard from "./PersonalSite";
import ObsidanoteCard from "./Obsidanote";
import MariposaCard from "./Mariposa";
import RollWithItCard from "./RollWithIt";
import TwisterCard from "./Twister";
import FinviCard from "./Finvi";
import Typography from '@mui/material/Typography';
import SparqCard from './Sparq';
import WIP from '../homePage/WIP';
import { SliderTrack } from '@mui/material';

export default function Portfolio() {
	return (
		<div className="Portfolio">
			<Typography gutterBottom variant="h6" component="div" align="left">
				Professional Career
			</Typography>
			<Box>
				<Stack>
					<SparqCard />
					<FinviCard />
				</Stack>
			</Box>
			<br/>
			<Typography gutterBottom variant="h6" component="div" align="left">
				Completed Projects
			</Typography>
			<Box>
				<Stack>
					<SwashbuckleCard />
					<TwisterCard />
				</Stack>
			</Box>
			<br/>
			<Typography gutterBottom variant="h6" component="div" align="left">
				WIP Projects
			</Typography>
			<Box>
				<Stack>
					<MariposaCard />
					<RollWithItCard />
				</Stack>
			</Box>
		</div>
	);
}