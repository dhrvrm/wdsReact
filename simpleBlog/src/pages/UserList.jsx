import { useLoaderData } from 'react-router-dom';
import { getUsers } from '../api/users';

const UserList = () => {
	const users = useLoaderData();

	return <div>UserList - {users.length}</div>;
};

function loader({ request: { signal } }) {
	return getUsers({ signal });
}

export const userListRoute = {
	loader,
	element: <UserList />,
};

export default UserList;
