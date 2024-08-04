export const TodoItem = ({
	id,
	name,
	completed,
	toggleCompleteHandler,
	onDeleteHandler,
}) => {
	return (
		<div>
			<label>
				<input
					type='checkbox'
					checked={completed}
					onChange={(e) => toggleCompleteHandler(id, e.target.checked)}
				/>
				<span>{name}</span>
			</label>
			<button onClick={() => onDeleteHandler(id)}>Delete</button>
		</div>
	);
};
