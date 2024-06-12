import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Box, styled } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	textDecoration: "none",
	color: "inherit",
	margin: theme.spacing(1, 2),
	"&.active": {
		fontWeight: "bold",
		borderBottom: `2px solid ${theme.palette.primary.main}`,
	},
}));

const BaseLayout = () => {
	const dispatch = useDispatch();
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}>
						<StyledNavLink to="/">Home</StyledNavLink>
					</Box>
					<Box>
						<Button variant="contained" onClick={() => dispatch(logout())}>
							Logout
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Box sx={{ p: 3 }}>
				<Outlet />
			</Box>
		</>
	);
};

export default BaseLayout;
