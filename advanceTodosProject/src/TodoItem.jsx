import { useContext, useRef, useState } from 'react';
import { TodoContext } from './App';

const TodoItem = ({ id, name, completed }) => {
	const [isEditing, setIsEditing] = useState(false);
	const { toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);
	const nameRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		updateTodo(id, nameRef.current.value);
		setIsEditing(false);
	};

	return (
		<li key={id}>
			{isEditing ? (
				<form onSubmit={handleSubmit}>
					<input autoFocus type='text' ref={nameRef} defaultValue={name} />
					<button>Save Changes</button>
				</form>
			) : (
				<>
					<label>
						<input
							type='checkbox'
							checked={completed}
							onChange={(e) => toggleTodo(id, e.target.checked)}
						/>
						<span>{name}</span>
					</label>
					<button onClick={() => setIsEditing(true)}>Edit</button>
					<button onClick={() => deleteTodo(id)}>Delete</button>
				</>
			)}
		</li>
	);
};

export default TodoItem;
