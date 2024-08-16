import { useLoaderData } from 'react-router-dom';
import { getUser } from '../api/users';

const UserItem = () => {
	const user = useLoaderData();
	const { name, email, website, address, company } = user;
	const { street, suite, city, zipcode } = address;
	return (
		<>
			<h1 className='page-tile'>{name}</h1>
			<div className='page-subtitle'>{email}</div>
			<div>
				<b>Company:</b> {company.name}
			</div>
			<div>
				<b>Website:</b> {website}
			</div>
			<div>
				<b>Address:</b> {`${street} ${suite}, ${city}- ${zipcode} `}
			</div>
		</>
	);
};

function loader({ request: { signal }, params: { userId } }) {
	return getUser(userId, { signal });
}

export const UserByIdRoute = {
	loader,
	element: <UserItem />,
};
export default UserItem;
