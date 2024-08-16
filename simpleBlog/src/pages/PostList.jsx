import { useLoaderData } from 'react-router-dom';
import { getPosts } from '../api/posts';
import PostCard from '../components/PostCard';

const PostList = () => {
	const posts = useLoaderData();

	return (
		<>
			<h1 className='page-title'>PostList</h1>
			<div className='card-grid'>
				{posts.map((post) => {
					return <PostCard key={post.id} {...post} />;
				})}
			</div>
		</>
	);
};

function loader({ request: { signal } }) {
	return getPosts({ signal });
}

export const postListRoute = {
	loader,
	element: <PostList />,
};

export default PostList;
