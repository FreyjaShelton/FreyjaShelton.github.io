import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SwashbuckleCard from "./Swashbuckle";
import PersonalSiteCard from "./PersonalSite";
import ObsidanoteCard from "./Obsidanote";
import MariposaCard from "./Mariposa";
import RollWithItCard from "./RollWithIt";
import TwisterCard from "./Twister";
import Typography from '@mui/material/Typography';

export default function Portfolio() {
	return (
		<div className="Portfolio">
			<br/>
			<Typography gutterBottom variant="h5" component="div" align="center">
				Completed Projects
			</Typography>
			<Box>
				<Stack spacing={2}>
					<SwashbuckleCard />
					<TwisterCard />
				</Stack>
			</Box>
			<br/>
			<Typography gutterBottom variant="h5" component="div" align="center">
				WIP Projects
			</Typography>
			<Box>
				<Stack spacing={2}>
					<PersonalSiteCard />
					<ObsidanoteCard />
					<MariposaCard />
					<RollWithItCard />
				</Stack>
			</Box>
		</div>
	);
}