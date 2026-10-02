<script>
  export let item;
  export let kind = 'report';
</script>
<a class="card" href={kind === 'adoption' ? `/adoption#${item.id}` : `/report/${item.id}`}>
  {#if item.image_url}
    <img src={item.image_url} alt={item.title} loading="lazy" />
  {:else}
    <div class="image-placeholder">🐾</div>
  {/if}
  <div class="card-body">
    <div class="meta"><span>{item.animal_type}</span><span>{item.status}</span></div>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <small>📍 {item.location}</small>
  </div>
</a>
