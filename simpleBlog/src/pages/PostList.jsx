import { useLoaderData } from 'react-router-dom';
import { getPosts } from '../api/posts';

const PostList = () => {
	const posts = useLoaderData();

	return <div>PostList - {posts.length}</div>;
};

function loader({ request: { signal } }) {
	return getPosts({ signal });
}

export const postListRoute = {
	loader,
	element: <PostList />,
};

export default PostList;
