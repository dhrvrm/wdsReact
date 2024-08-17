import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Navigation from '../components/Navigation';

const RootLayout = () => {
	const { state } = useNavigation();

	const isLoading = state === 'loading';
	return (
		<>
			<Navigation />
			<ScrollRestoration />

			{isLoading && <div className='loading-spinner'></div>}
			<div className={`container ${isLoading ? 'loading' : undefined}`}>
				<Outlet />
			</div>
		</>
	);
};

export default RootLayout;
