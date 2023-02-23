<script lang="ts">
	import type { Todo } from '../types';
	import TodoComponent from './Todo.svelte';

	export let todos: Todo[] = [];

	const sortedTodos = [...todos].sort((a, b) => {
		if (a.completed === b.completed) {
			return 0;
		}
		if (a.completed) {
			return 1;
		}
		return -1;
	});
</script>

<section>
	<ul class="flex flex-wrap gap-6">
		{#each sortedTodos as todo}
			<TodoComponent {todo} />
		{/each}
	</ul>
</section>
