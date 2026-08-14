import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function SparqCard() {
	return (
		<CardRoot title={"Sparq"}>
			<Typography variant="body2"  >
				- Aligned technical architecture with customer requirements, reducing rework and accelerating time-to-value
				- Reduced post-launch defects through unit testing and code review discipline, improving release reliability
				- Designed and implemented scalable, modular, API-centric architectures using C#, React, and AWS, streamlining development with Git and Azure DevOps CI/CD pipelines
			</Typography>
		</CardRoot>
	);
}