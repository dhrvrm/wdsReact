import { apiClient } from './base';

export function getTodos(options) {
	return apiClient
		.get(`todos`, options)
		.then((res) => res.data)
		.catch((error) => {
			console.error('Error fetching todos:', error);
			throw error;
		});
}
