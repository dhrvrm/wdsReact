import { useLoaderData } from 'react-router-dom';
import { getPost } from '../api/posts';

const PostItem = () => {
	const post = useLoaderData();
	return (
		<>
			<h1 className='page-title'>{post.title}</h1>
			<div>{post.body}</div>
		</>
	);
};

function loader({ request: { signal }, params: { postId } }) {
	return getPost(postId, { signal });
}

export const PostByIdRoute = {
	loader,
	element: <PostItem />,
};
export default PostItem;
