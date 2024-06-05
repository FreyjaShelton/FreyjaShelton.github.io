import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet } from "react-router-dom";

const pages = ['Products', 'Pricing', 'Blog'];

export default function NewAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

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
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								<MenuItem
									component='a'
									href='#/Portfolio'
									sx={{ my: 2, color: 'black', display: 'block' }}
								>
									Portfolio
								</MenuItem>
								<MenuItem
									component='a'
									href='#/Source'
									sx={{ my: 2, color: 'black', display: 'block' }}
								>
									Source Code
								</MenuItem>
							</Menu>
						</Box>
						<Typography
							variant="h5"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
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