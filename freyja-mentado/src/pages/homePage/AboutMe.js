import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function AboutMe() {
	return (
		<div>
			<br />
			<CardRoot title={"About Me"}>
				<Typography variant="body2">
					I am a software engineer with 6 years of experience building web applications. 
					My work focuses on developing technological solutions to address 
					industry-specific needs in ways that enhance efficiency, accessibility 
					and usability. I’ve helped provide solutions in industries including trucking, 
					medical, and insurance.
				</Typography>
			</CardRoot>
		</div>
	);
}