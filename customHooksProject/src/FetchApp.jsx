import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const URL = {
	USERS: 'https://jsonplaceholder.typicode.com/users',
	POSTS: 'https://jsonplaceholder.typicode.com/posts',
	COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
};
export const FetchApp = () => {
	const [url, setUrl] = useState(URL.USERS);
	const { data, isLoading, isError } = useFetch(url);
	return (
		<>
			<h1> Fetch App</h1>
			<div>
				<label>
					<input
						type='radio'
						checked={url === URL.USERS}
						onChange={() => setUrl(URL.USERS)}
					/>
					<span>Users</span>
				</label>
				<label>
					<input
						type='radio'
						checked={url === URL.POSTS}
						onChange={() => setUrl(URL.POSTS)}
					/>
					<span>Posts</span>
				</label>
				<label>
					<input
						type='radio'
						checked={url === URL.COMMENTS}
						onChange={() => setUrl(URL.COMMENTS)}
					/>
					<span>Comments</span>
				</label>
			</div>
			{isLoading ? (
				<h2>Loading...</h2>
			) : isError ? (
				<h2>Error Occurred</h2>
			) : (
				<pre>{JSON.stringify(data, null, 2)}</pre>
			)}
		</>
	);
};
