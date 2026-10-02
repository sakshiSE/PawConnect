<script>
  export let user;
  let open = false;
</script>
<nav class="nav">
  <a class="brand" href="/">🐾 <span>PawConnect</span></a>
  <button class="menu" on:click={() => open = !open}>☰</button>
  <div class:show={open} class="links">
    <a href="/lost-found">Lost & Found</a>
    <a href="/help">Animal Help</a>
    <a href="/adoption">Adoption</a>
    <a href="/care">Care</a>
    <a href="/places">Places</a>
    {#if user}
      <a class="pill" href="/dashboard">My PawConnect</a>
      <a href="/logout">Logout</a>
    {:else}
      <a href="/login">Login</a>
      <a class="pill" href="/register">Join PawConnect</a>
    {/if}
  </div>
</nav>
