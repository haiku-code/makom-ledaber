import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/Root';
import { ErrorPage } from 'routes/ErrorPage';
import { RoomPage } from 'routes/RoomPage';
import { CreateRoomPage } from 'routes/CreateRoomPage';
import { HomePage } from 'routes/HomePage';

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
				path: 'room/:roomId',
				element: <RoomPage />,
			},
      {
        path: 'room',
        element: <CreateRoomPage />,
      }
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
