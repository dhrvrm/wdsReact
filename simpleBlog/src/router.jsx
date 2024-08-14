import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import PostList from './components/PostList';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Navigate to='posts' /> },
			{
				path: 'todos',
				element: <TodoList />,
			},
			{
				path: 'users',
				element: <UserList />,
			},
			{
				path: 'posts',
				element: <PostList />,
			},
		],
	},
]);
