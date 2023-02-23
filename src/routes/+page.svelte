<script lang="ts">
	import type { LayoutServerData } from './$types';
	import Header from '../components/Header.svelte';
	import Todos from '../components/Todos.svelte';
	import Form from '../components/Form.svelte';

	export let data: LayoutServerData;
	let { todos } = data;
</script>

<Header />
<main class="p-8">
	<h1 class="text-lg text-center">To Do</h1>
	<Form />
	<Todos {todos} />
</main>
