import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import { todoListRoute } from './pages/TodoList';
import { userListRoute } from './pages/UserList';
import { postListRoute } from './pages/PostList';

import { UserByIdRoute } from './pages/UserItem';
import { PostByIdRoute } from './pages/PostItem';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Navigate to='posts' /> },
			{
				path: 'todos',
				children: [
					{
						index: true,
						...todoListRoute,
					},
				],
			},
			{
				path: 'users',
				children: [
					{
						index: true,
						...userListRoute,
					},
					{
						path: ':userId',
						...UserByIdRoute,
					},
				],
			},
			{
				path: 'posts',
				children: [
					{
						index: true,
						...postListRoute,
					},
					{
						path: ':postId',
						...PostByIdRoute,
					},
				],
			},
		],
	},
]);
