import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function WIP() {
	return (
		<div>
			<br />
			<CardRoot title={"Work In Progress"}>
				<Typography variant="body2">
					This site is still a work in progress and is not indicative of the final design.
				</Typography>
			</CardRoot>
		</div>
	);
}