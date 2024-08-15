import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from '../components/Navigation';

const RootLayout = () => {
	return (
		<>
			<Navigation />
			<ScrollRestoration />
			<Outlet />
		</>
	);
};

export default RootLayout;
