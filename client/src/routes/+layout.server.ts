import { apiUrl, type User } from '$lib/core-data.js';
import axios from 'axios';

export const load = async ({ cookies }) => {
	let token = cookies.get('auth_token');

	let user = await axios
		.get(`${apiUrl}/auth/me`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((response) => response.data as User)
		.catch(() => null);

	return { user };
};
