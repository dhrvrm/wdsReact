import { apiClient } from './base';

export function getPosts(options) {
	return apiClient.get(`posts`, options).then((res) => res.data);
}
export function getPost(postId, options) {
	return apiClient.get(`posts/${postId}`, options).then((res) => res.data);
}
