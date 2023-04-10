import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/Root';
import { ErrorPage } from 'routes/ErrorPage';
import { RoomPage } from 'routes/RoomPage';
import { CreateRoomPage } from 'routes/CreateRoomPage';
import { HomePage } from 'routes/HomePage';
import { TermOfServicePage } from 'routes/TermOfServicePage';
import { PrivacyPolicyPage } from 'routes/PrivacyPolicyPage';
import { StoreProvider } from 'store/storeContext';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'login',
				element: <CreateRoomPage />,
			},
			{
				path: 'room/:roomId',
				element: <RoomPage />,
			},
			{
				path: 'room',
				element: <CreateRoomPage />,
			},
		],
	},
	{
		path: '/term-of-service',
		element: <TermOfServicePage />,
	},
	{
		path: '/privacy-policy',
		element: <PrivacyPolicyPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreProvider>
			<RouterProvider router={router} />
		</StoreProvider>
	</React.StrictMode>
);
