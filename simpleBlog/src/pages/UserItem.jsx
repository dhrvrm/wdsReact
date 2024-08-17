import { useLoaderData } from 'react-router-dom';
import { getUser } from '../api/users';
import { getPosts } from '../api/posts';
import { getTodos } from '../api/todos';
import PostCard from '../components/PostCard';
import TodoItem from '../components/TodoItem';

const UserItem = () => {
	const { user, posts, todos } = useLoaderData();
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

			<h3 className='mt-4 mb-2'>Posts</h3>
			<div className='card-grid'>
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
			</div>

			<h3 className='mt-4 mb-2'>Todos</h3>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	);
};

async function loader({ request: { signal }, params: { userId } }) {
	const user = getUser(userId, { signal });
	const posts = getPosts({ signal, params: { userId } });
	const todos = getTodos({ signal, params: { userId } });
	return { user: await user, posts: await posts, todos: await todos };
}

export const UserByIdRoute = {
	loader,
	element: <UserItem />,
};
export default UserItem;
