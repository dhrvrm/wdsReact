import { useEffect, useState } from 'react';
import User from './User';

function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		fetch('https://jsonplaceholder.typicode.com/users', {
			signal: controller.signal,
		})
			.then((res) => res.json())
			.then(setUsers)
			.catch((error) => {
				if (error.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					console.error('Fetch error:', error);
				}
			})
			.finally(() => {
				setLoading(false);
			});

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<h1>Users List</h1>

			{loading ? (
				<h2>Loading... </h2>
			) : (
				<ul>
					{users.map((user) => (
						<User key={user.id} {...user} />
					))}
				</ul>
			)}
		</>
	);
}

export default App;
