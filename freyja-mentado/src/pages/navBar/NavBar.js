import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";

export default function ResponsiveAppBar() {
	return (
		<div>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							Freyja Mentado
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Button
								href={`#/Portfolio`}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Portfolio
							</Button>
							<Button
								href={`#/Source`}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Source Code
							</Button>
							{/* <Button
								href={`#/Types`}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Types
							</Button> */}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "100vh",
			}}>
				<Box sx={{ textAlign: "left" }}>
					<Outlet />
					<Container maxWidth="xl" alignItems='center' >
						<p> </p>
						<Typography
							variant="body2"
							sx={{
								textAlign: 'center'
							}}>© 2024 Freyja Mentado. All Rights Reserved.</Typography>
						<p> </p>
					</Container>
				</Box>
			</Box>
		</div>
	);
}
