import { apiClient } from './base';

export function getUsers(options) {
	return apiClient.get(`users`, options).then((res) => res.data);
}
export function getUser(userId, options) {
	return apiClient.get(`users/${userId}`, options).then((res) => res.data);
}
