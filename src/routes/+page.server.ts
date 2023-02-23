import type { Actions, PageServerLoad } from './$types';
import { addTodo, deleteTodo, getTodos, toggleTodo } from '../lib/server/todos';

export const load = (() => {
	const todos = getTodos();

	return {
		todos
	};
}) satisfies PageServerLoad;

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');

		if (!title || typeof title !== 'string') {
			return {
				success: false
			};
		}

		addTodo(title);

		return {
			success: true
		};
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (!id || typeof id !== 'string') {
			return {
				success: false
			};
		}

		deleteTodo(Number(id));

		return {
			success: true
		};
	},
	toggle: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

		if (!id || typeof id !== 'string') {
			return {
				success: false
			};
		}

		toggleTodo(Number(id));

		return {
			success: true
		};
	}
} satisfies Actions;
