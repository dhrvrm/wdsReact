const TodoFilter = ({
	name,
	setFilterName,
	isCompletedHidden,
	setIsCompletedHidden,
}) => {
	return (
		<div className='filter-form'>
			<label>
				<span>Filter By:</span>
				<input
					value={name}
					onChange={(e) => setFilterName(e.target.value)}
					type='text'
				/>
			</label>
			<label>
				<input
					value={isCompletedHidden}
					onChange={(e) => setIsCompletedHidden(e.target.checked)}
					type='checkbox'
				/>
				<span>Hide Completed</span>
			</label>
		</div>
	);
};

export default TodoFilter;
