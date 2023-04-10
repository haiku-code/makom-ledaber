import Dialog from '@mui/material/Dialog';
import { FC } from 'react';
import { FirebaseAuth } from './FirebaseAuth';

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export const LoginPopup: FC<Props> = ({ isOpen, onClose }) => {
	return (
		<Dialog open={isOpen} onClose={onClose} fullWidth={true}>
      <div>Login</div>
      <FirebaseAuth/>
		</Dialog>
	);
};
