import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import './App.css';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'TODOS';
const ACTIONS = {
	ADD: 'todo/ADD',
	UPDATE: 'todo/UPDATE',
	TOGGLE: 'todo/TOGGLE',
	DELETE: 'todo/DELETE',
};

export const TodoContext = createContext();

const todoReducer = (todos, { type, payload }) => {
	switch (type) {
		case ACTIONS.ADD:
			return [
				...todos,
				{ name: payload.name, completed: false, id: crypto.randomUUID() },
			];
		case ACTIONS.UPDATE:
			return todos.map((todo) => {
				if (todo.id === payload.id) {
					return {
						...todo,
						name: payload.name,
					};
				}
			});
		case ACTIONS.TOGGLE:
			return todos.map((todo) => {
				if (todo.id === payload.id) {
					return {
						...todo,
						completed: payload.completed,
					};
				}
				return todo;
			});
		case ACTIONS.DELETE:
			console.log(payload.id);

			return todos.filter((todo) => {
				if (todo.id !== payload.id) return todo;
			});
		default:
			return todos;
	}
};

function App() {
	const [filterName, setFilterName] = useState('');
	const [isCompletedHidden, setIsCompletedHidden] = useState(false);
	const [todos, dispatch] = useReducer(todoReducer, [], (initialValue) => {
		const value = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (value == null) return initialValue;

		return JSON.parse(value);
	});

	const filteredTodos = useMemo(() => {
		return todos.filter((todo) => {
			if (isCompletedHidden && todo.completed) return false;
			return todo.name.toLowerCase().includes(filterName.toLowerCase());
		});
	}, [todos, filterName, isCompletedHidden]);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	const addNewTodo = (name) => {
		if (name === '') return;
		dispatch({ type: ACTIONS.ADD, payload: { name } });
	};

	const toggleTodo = (todoId, completed) => {
		dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
	};

	const deleteTodo = (todoId) => {
		dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
	};
	const updateTodo = (todoId, newTodoName) => {
		dispatch({
			type: ACTIONS.UPDATE,
			payload: { id: todoId, name: newTodoName },
		});
	};

	return (
		<TodoContext.Provider
			value={{
				todos: filteredTodos,
				addNewTodo,
				toggleTodo,
				deleteTodo,
				updateTodo,
			}}
		>
			<TodoFilter
				name={filterName}
				setFilterName={setFilterName}
				isCompletedHidden={isCompletedHidden}
				setIsCompletedHidden={setIsCompletedHidden}
			/>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<TodoForm addNewTodo={addNewTodo} />
		</TodoContext.Provider>
	);
}

export default App;
