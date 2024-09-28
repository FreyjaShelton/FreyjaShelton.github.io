import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import SwashbuckleCard from "./Swashbuckle";
import PersonalSiteCard from "./PersonalSite";
import ObsidanoteCard from "./Obsidanote";
import MariposaCard from "./Mariposa";
import RollWithItCard from "./RollWithIt";
import TwisterCard from "./Twister";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


export default function Portfolio() {
	return (
		<div className="Portfolio">
			<p>Completed Projects</p>
			<Box sx={{ width: '100%' }}>
				<Stack spacing={2}>
					<SwashbuckleCard />
					<TwisterCard />
				</Stack>
			</Box>
			<p>WIP Projects</p>
			<Box sx={{ width: '100%' }}>
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