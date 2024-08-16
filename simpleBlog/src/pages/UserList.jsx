import { useLoaderData } from 'react-router-dom';
import { getUsers } from '../api/users';
import UserCard from '../components/UserCard';

const UserList = () => {
	const users = useLoaderData();

	return (
		<>
			<h1 className='page-title'>UserList</h1>
			<div className='card-grid'>
				{users.map((user) => {
					return <UserCard key={user.id} {...user} />;
				})}
			</div>
		</>
	);
};

function loader({ request: { signal } }) {
	return getUsers({ signal });
}

export const userListRoute = {
	loader,
	element: <UserList />,
};

export default UserList;
