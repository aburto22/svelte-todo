<script lang="ts">
	import type { PageServerData } from './$types';
	import Header from '../components/Header.svelte';
	import Todos from '../components/Todos.svelte';
	import Form from '../components/Form.svelte';

	export let data: PageServerData;

	const { todos } = data;
</script>

<Header />
<main class="p-8">
	<h1 class="text-lg text-center">To Do</h1>
	<Form />
	<Todos {todos} />
</main>
