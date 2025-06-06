import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Outlet } from "react-router-dom";

const pages = ["Portfolio", "Source"];

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div>
			<AppBar 
				position="static"
				sx={{
					backgroundColor: '#c9a0dc',
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						{/* <Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: '#000',
								textDecoration: 'none',
							}}
						>
							Freyja Shelton
						</Typography> */}
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="#000"
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
								{pages.map((page) => (
									<MenuItem
										key={page}
										component='a'
										href={`#/${page}`}
										onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}

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
								fontWeight: 300,
								color: '#000',
								textDecoration: 'none',
							}}
						>
							Freyja Shelton
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									component='a'
									href={`#/${page}`}
									sx={{ my: 2, color: '#000', display: 'block' }}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "80vh",
			}}>
				<Box sx={{ 
					textAlign: "left",
					}}>
					<Outlet />
				</Box>
			</Box>
		</div>
	);
}