import { useLoaderData } from 'react-router-dom';
import { getTodos } from '../api/todos';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
	const todos = useLoaderData();
	return (
		<>
			TodoList - {todos.length}
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	);
};

function loader({ request: { signal } }) {
	return getTodos({ signal });
}

export const todoListRoute = {
	loader,
	element: <TodoList />,
};

export default TodoList;
