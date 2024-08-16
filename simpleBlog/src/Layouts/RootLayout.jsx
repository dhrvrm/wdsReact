import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navigation from '../components/Navigation';

const RootLayout = () => {
	return (
		<>
			<Navigation />
			<ScrollRestoration />
			<div className='container'>
				<Outlet />
			</div>
		</>
	);
};

export default RootLayout;
