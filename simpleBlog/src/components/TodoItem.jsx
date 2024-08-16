const TodoItem = ({ title, completed }) => {
	return <li className={completed ? 'strike-through' : undefined}>{title}</li>;
};

export default TodoItem;
