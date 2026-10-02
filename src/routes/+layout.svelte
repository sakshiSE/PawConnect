<script>
  import '../app.css';

  import Nav from '$lib/components/Nav.svelte';
  export let data;
</script>
<svelte:head><title>PawConnect — Connect. Care. Help.</title><meta name="description" content="A simple community platform for animal help, adoption and lost & found." /></svelte:head>
<Nav user={data.user} />
<main><slot /></main>
<footer>🐾 PawConnect · Connect. Care. Help. · Community information only — not veterinary diagnosis.</footer>
