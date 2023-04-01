import { Container, CssBaseline, Typography } from '@mui/material';
import { AppNavBar, Box } from 'components';
import { Outlet } from 'react-router-dom';
// import reactLogo from './assets/react.svg';

export function Root() {
	return (
		<div>
			<CssBaseline />
			<AppNavBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
		</div>
	);
}
