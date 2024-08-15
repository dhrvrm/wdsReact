import { apiClient } from './base';

export function getComments(postId, options) {
	return apiClient
		.get(`posts/${postId}/comments`, options)
		.then((res) => res.data);
}
