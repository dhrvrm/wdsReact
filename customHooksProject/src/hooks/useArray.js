import { useState, useCallback } from 'react';

export default function useArray(initialValue) {
	const [array, setArray] = useState(initialValue);

	const push = useCallback((newElement) => {
		setArray((prevArray) => [...prevArray, newElement]);
	}, []);

	const replace = useCallback((index, element) => {
		setArray((prevArray) => [
			prevArray.slice(0, index),
			element,
			prevArray.slice(index + 1),
		]);
	}, []);
	const filter = useCallback((callback) => {
		setArray((prevArray) => prevArray.filter(callback));
	}, []);
	const remove = useCallback((index) => {
		setArray((prevArray) => [
			prevArray.slice(0, index),
			prevArray.slice(index + 1),
		]);
	}, []);
	const clear = useCallback(() => {
		setArray([]);
	}, []);
	const reset = useCallback(() => {
		setArray(initialValue);
	}, [initialValue]);

	return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
