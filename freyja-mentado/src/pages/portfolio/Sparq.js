import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function SparqCard() {
	return (
		<CardRoot title={"Sparq"}>
			<Typography variant="body2"  >
				Back end engineer with a focus on .NET. I have worked with several clients
				across various projects including creating a ticketing software for Variant that
				handled manager requests from employees out on the road, creating an api
				for TruStage life insurance that ties together multiple services for their partners
				to interface with, transitioning ThermaTru's backend to a newer version of a
				framework, and creating a messaging system for Symplr's backend to allow
				various services to talk to each other easier.
			</Typography>
		</CardRoot>
	);
}