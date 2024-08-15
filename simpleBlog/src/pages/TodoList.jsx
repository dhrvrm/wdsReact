import { useLoaderData } from 'react-router-dom';
import { getTodos } from '../api/todos';

const TodoList = () => {
	const todos = useLoaderData();
	return <div>TodoList - {todos.length}</div>;
};

function loader({ request: { signal } }) {
	return getTodos({ signal });
}

export const todoListRoute = {
	loader,
	element: <TodoList />,
};

export default TodoList;
