import { useReducer } from 'react';

const ACTION = {
	INCREMENT: 'counter/INCREMENT',
	DECREMENT: 'counter/DECREMENT',
	RESET: 'counter/REST',
	ADD: 'counter/ADD',
};

const counterReducer = (state, { type, payload }) => {
	switch (type) {
		case ACTION.INCREMENT:
			return state + 1;

		case ACTION.DECREMENT:
			return state - 1;

		case ACTION.RESET:
			return 0;

		case ACTION.ADD:
			return state + payload.value;

		default:
			return state;
	}
};

export const CounterApp = () => {
	const [counter, dispatch] = useReducer(counterReducer, 0);
	return (
		<>
			<div className='card'>
				<p>{counter}</p>
				<button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
					Increase Counter
				</button>
				<button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
					Decrease Counter
				</button>
				<button onClick={() => dispatch({ type: ACTION.RESET })}>
					Reset Counter
				</button>
				<button
					onClick={() => dispatch({ type: ACTION.ADD, payload: { value: 10 } })}
				>
					Add 10 in Counter
				</button>
			</div>
		</>
	);
};
