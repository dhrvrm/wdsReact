import { useEffect, useReducer } from 'react';

const ACTIONS = {
	SUCCESS: 'fetch/SUCCESS',
	ERROR: 'fetch/ERROR',
	START: 'fetch/START',
};

const fetchReducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.START:
			return {
				isLoading: true,
				isError: false,
			};
		case ACTIONS.SUCCESS:
			return {
				data: payload.data,
				isLoading: false,
				isError: false,
			};
		case ACTIONS.ERROR:
			return {
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export function useFetch(url, options = {}) {
	const [state, dispatch] = useReducer(fetchReducer, {
		data: undefined,
		isError: false,
		isLoading: true,
	});

	useEffect(() => {
		/*
		OLD WAY of STARTING FETCH
		setData(undefined);
		setIsError(false);
		setIsLoading(true);
		*/
		dispatch({ type: ACTIONS.START });

		const controller = new AbortController();
		fetch(url, { signal: controller.signal, ...options })
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					return Promise.reject(res);
				}
			})
			.then((data) => dispatch({ type: ACTIONS.SUCCESS, payload: { data } }))
			.catch((e) => {
				if (e.name === 'AbortError') return;
				dispatch({ type: ACTIONS.ERROR });
			});

		return () => {
			controller.abort();
		};
	}, [url]);

	return state;
}
