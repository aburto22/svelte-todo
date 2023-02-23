<script lang="ts">
	import type { Todo } from '../types';

	export let todo: Todo;
</script>

<li class="block p-3 border border-gray-200 rounded-sm">
	<p>{todo.title}</p>
	<p class={`text-xs ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
		{todo.completed ? 'Completed' : 'Outstanding'}
	</p>
	<div class="flex gap-3 mt-2">
		<form action="?/toggle" method="POST">
			<input type="text" name="id" class="hidden" value={todo.id} />
			<button type="submit" class="px-2 py-1 bg-blue-200 rounded-md text-sm">Toggle</button>
		</form>
		<form action="?/delete" method="POST">
			<input type="text" name="id" class="hidden" value={todo.id} />
			<button type="submit" class="px-2 py-1 bg-red-200 rounded-md text-sm">Delete</button>
		</form>
	</div>
</li>
