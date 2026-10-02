<script>
  export let data;
  export let form;
</script>
<section class="page detail">
  {#if data.item.image_url}<img src={data.item.image_url} alt={data.item.title}/>{/if}
  <div class="detail-box">
    <div class="meta"><span>{data.kind==='adoption'?'ADOPTION':data.kind==='help'?'ANIMAL HELP':data.item.type.toUpperCase()} · {data.item.animal_type}</span><span>{data.item.status}</span></div>
    <h1>{data.item.title}</h1>
    <p>{data.item.description}</p>
    <p>📍 <strong>{data.item.location}</strong></p>
    {#if data.kind==='help'}
      <div class="success">🤝 {data.helpers.length} person(s) have offered to help.</div>
      {#if data.item.status==='open'}<form method="POST" action="?/respond"><button class="btn primary">I Can Help</button></form>{/if}
    {:else}
      <div class="success">Interested? Contact the person who posted this listing at <strong>{data.item.contact_email}</strong>.</div>
    {/if}
    {#if data.user && data.user.id === data.item.user_id}
      <hr style="border:0;border-top:1px solid #eee9e1;margin:25px 0" />
      <strong>Manage this post</strong>
      <form class="toolbar" method="POST" action="?/status">
        <input type="hidden" name="kind" value={data.kind}/>
        <select name="status">
          {#if data.kind==='adoption'}<option value="available">Available</option><option value="adopted">Adopted</option>{:else if data.kind==='help'}<option value="open">Open</option><option value="helped">Helped</option><option value="closed">Closed</option>{:else}<option value="active">Active</option><option value="resolved">Resolved</option>{/if}
        </select>
        <button class="btn light">Update status</button>
      </form>
    {/if}
    {#if form?.error}<div class="error">{form.error}</div>{/if}
    {#if form?.success || form?.updated}<div class="success">Done — your update was recorded.</div>{/if}
  </div>
</section>
