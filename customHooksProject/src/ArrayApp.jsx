import useArray from './hooks/useArray';

const INITIAL_VALUE = [1, 2, 3];

const ArrayApp = () => {
	const { array, set, push, replace, filter, remove, clear, reset } =
		useArray(INITIAL_VALUE);
	return (
		<div>
			<h1>ArrayApp</h1>
			<p>{array?.join(', ')}</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					justifyContent: 'start',
					alignItems: 'start',
				}}
			>
				<button onClick={() => set([4, 5, 6])}>set to [4,5,6]</button>
				<button onClick={() => push(4)}>push 4</button>
				<button onClick={() => replace(1, 9)}>
					replace second elment with 9
				</button>
				<button onClick={() => filter((n) => n < 3)}>
					keep numbers less than 3
				</button>
				<button onClick={() => remove(1)}>remove Second Element</button>
				<button onClick={clear}>clear</button>
				<button onClick={reset}>reset</button>
			</div>
		</div>
	);
};

export default ArrayApp;
