import { useRef } from 'react';

const TodoForm = ({ addNewTodo }) => {
	const todoRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (todoRef.current.value == '') return;
		addNewTodo(todoRef.current.value);

		todoRef.current.value = '';
	};
	return (
		<>
			<h2>Add New Todo</h2>
			<form onSubmit={handleSubmit}>
				<input type='text' ref={todoRef} />
				<button type='submit'>Add Todo</button>
			</form>
		</>
	);
};

export default TodoForm;
