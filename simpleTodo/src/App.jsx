import { useState } from 'react';
import { TodoItem } from './Todo';

function App() {
	const [newTodo, setNewTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const addNewTodo = () => {
		if (newTodo.length < 1) return;
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: crypto.randomUUID(), name: newTodo, completed: false },
		]);
		setNewTodo('');
	};

	const toggleCompleteHandler = (id, completed) => {
		setTodos((currentTodos) =>
			currentTodos.map((todo) => {
				if (todo.id === id) return { ...todo, completed };
				return todo;
			})
		);
	};

	const onDeleteHandler = (id) => {
		setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
	};
	return (
		<>
			<div>
				<label htmlFor='new-todo'>Add Todo</label>
				<input
					id='new-todo'
					type='text'
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button onClick={addNewTodo}>Add</button>
			</div>
			{todos?.map((todo) => (
				<TodoItem
					key={todo.id}
					{...todo}
					toggleCompleteHandler={toggleCompleteHandler}
					onDeleteHandler={onDeleteHandler}
				/>
			))}
		</>
	);
}

export default App;
