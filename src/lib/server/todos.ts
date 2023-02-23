let todos = [
	{
		id: 1,
		title: 'todo1',
		completed: true
	},
	{
		id: 2,
		title: 'todo2',
		completed: false
	}
];

export const getTodos = () => todos;

export const addTodo = (title: string) => {
	const latestId = todos.at(-1)?.id;

	const newTodo = {
		id: latestId ? latestId + 1 : 1,
		title,
		completed: false
	};

	todos = [...todos, newTodo];
};

export const toggleTodo = (id: number) => {
	todos = todos.map((todo) => {
		if (todo.id === id) {
			return {
				...todo,
				completed: !todo.completed
			};
		}
		return todo;
	});
};

export const deleteTodo = (id: number) => {
	todos = todos.filter((todo) => todo.id !== id);
};
