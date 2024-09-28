import githubLogo from './github-mark.png'
import linkedinLogo from './LI-In-Bug.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function FooterComp() {
	return (
		<footer>
			<br/>
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
				<Box sx={{ textAlign: "center" }}>
					<a href="https://www.linkedin.com/in/freyja-mentado/">
						<img
							src={linkedinLogo}
							alt="linkedin"
							width="40"
							height="40" />
					</a>
					<a href="https://github.com/FreyjaMentado">
						<img
							src={githubLogo}
							alt="github"
							width="40"
							height="40" />
					</a>
					<Typography
						variant="body2"
						sx={{
							textAlign: 'center'
						}}>© 2024 Freyja Mentado. All Rights Reserved.</Typography>
				</Box>
			</Box>
		</footer>
	);
}
