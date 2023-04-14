import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { LoginPopup } from 'components/LoginPopup';
import { useToggle, useUpdateEffect } from 'react-use';
import { useStores } from 'store/storeContext';
import { observer } from 'mobx-react-lite';
import { Avatar } from 'components';

export const Profile = observer(() => {
	const rootStore = useStores();
	const { user, signOut } = rootStore;
	const [isOpen, toggleOpen] = useToggle(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useUpdateEffect(() => {
    if(user && isOpen) {
      toggleOpen();
    }
  }, [user]);

	const handleLogin = () => {
		toggleOpen();
		handleClose();
	};

	const handleLogout = () => {
		handleClose();
    signOut();
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<LoginPopup isOpen={isOpen} onClose={toggleOpen} />
			{user ? (
				<Avatar src={user.photoURL as string} onClick={handleMenu} />
			) : (
				<Avatar onClick={handleMenu} />
			)}
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{user ? (
					<MenuItem onClick={handleLogout}>Logout</MenuItem>
				) : (
					<MenuItem onClick={handleLogin}>Login</MenuItem>
				)}
			</Menu>
		</>
	);
});

export function AppNavBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Makom Ledaber
					</Typography>
					<Profile />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
