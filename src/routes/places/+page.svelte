<svelte:head>
  <title>Places & Services — PawConnect</title>
  <meta
    name="description"
    content="Find animal veterinary services, rescue support and animal-friendly places in Goa."
  />
</svelte:head>

<script>
  const categories = ['All', 'Veterinary', 'Animal Help', 'Animal-Friendly'];

  let selected = 'All';
  let search = '';

  const places = [
    {
      name: 'Veterinary Hospital — Tonca',
      category: 'Veterinary',
      area: 'Tonca, Panaji',
      icon: '🏥',
      description:
        'Government veterinary service serving the Tiswadi area. Useful for veterinary assistance and animal health services.'
    },
    {
      name: 'Veterinary Hospital — Mapusa',
      category: 'Veterinary',
      area: 'Mapusa, North Goa',
      icon: '🐾',
      description:
        'Government veterinary hospital serving the Mapusa area.'
    },
    {
      name: 'Veterinary Hospital — Sonsodo',
      category: 'Veterinary',
      area: 'Sonsodo, Goa',
      icon: '🏥',
      description:
        'Government veterinary hospital providing animal health support.'
    },
    {
      name: 'Veterinary Hospital — Curti-Ponda',
      category: 'Veterinary',
      area: 'Curti, Ponda',
      icon: '🐶',
      description:
        'Government veterinary hospital serving the Ponda area.'
    },
    {
      name: 'Veterinary Hospital — Honda',
      category: 'Veterinary',
      area: 'Honda, Goa',
      icon: '🐱',
      description:
        'Government veterinary hospital serving animals in the surrounding area.'
    },
    {
      name: 'Veterinary Dispensary — Canacona',
      category: 'Veterinary',
      area: 'Canacona, South Goa',
      icon: '🏥',
      description:
        'Government veterinary dispensary serving the Canacona area.'
    },
    {
      name: 'Veterinary Dispensary — Calangute',
      category: 'Veterinary',
      area: 'Calangute, North Goa',
      icon: '🐾',
      description:
        'Government veterinary dispensary serving the Calangute area.'
    },
    {
      name: 'Veterinary Dispensary — Vasco',
      category: 'Veterinary',
      area: 'Vasco, Goa',
      icon: '🐶',
      description:
        'Government veterinary dispensary serving the Vasco area.'
    },
    {
      name: 'Mobile Veterinary Services',
      category: 'Animal Help',
      area: 'Goa',
      icon: '🚑',
      description:
        'Goa has mobile veterinary services intended to improve access to veterinary assistance.'
    },
    {
      name: 'Animal Welfare & Rescue Support',
      category: 'Animal Help',
      area: 'Goa',
      icon: '❤️',
      description:
        'Use PawConnect Animal Help to report an injured animal or offer your help to another person.'
    },
    {
      name: 'Pet-Friendly Places',
      category: 'Animal-Friendly',
      area: 'Goa',
      icon: '☕',
      description:
        'Explore animal-friendly locations and spaces when spending time with your companion.'
    }
  ];

  $: filteredPlaces = places.filter((place) => {
    const matchesCategory =
      selected === 'All' || place.category === selected;

    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      place.name.toLowerCase().includes(query) ||
      place.area.toLowerCase().includes(query) ||
      place.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
</script>

<div class="places-page">

  <section class="places-hero">
    <div class="hero-content">
      <span class="eyebrow">PAWCONNECT • GOA</span>

      <h1>
        Places that help
        <em>animals.</em>
      </h1>

      <p>
        Find veterinary services, animal support and animal-friendly places
        across Goa — all in one simple directory.
      </p>

      <div class="hero-actions">
        <a class="button primary" href="/help">
          🆘 Need animal help?
        </a>

        <a class="button secondary" href="/care">
          🌿 Learn animal care
        </a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="hero-circle">🐶</div>
      <div class="hero-cat">🐱</div>
      <div class="hero-paw">🐾</div>
    </div>
  </section>


  <section class="directory">

    <div class="section-heading">
      <div>
        <span class="eyebrow">GOA DIRECTORY</span>

        <h2>
          Find the right place
          <br />
          when you need it.
        </h2>
      </div>

      <p>
        Information is organised by service type and location to make it
        easier to find what you are looking for.
      </p>
    </div>


    <div class="filters">

      <div class="search-box">
        <span>⌕</span>

        <input
          type="search"
          bind:value={search}
          placeholder="Search by place, service or area..."
        />
      </div>

      <div class="category-buttons">
        {#each categories as category}
          <button
            class:active={selected === category}
            on:click={() => (selected = category)}
          >
            {category}
          </button>
        {/each}
      </div>

    </div>


    <div class="place-grid">

      {#each filteredPlaces as place}
        <article class="place-card">

          <div class="place-top">
            <div class="place-icon">
              {place.icon}
            </div>

            <span class="place-category">
              {place.category}
            </span>
          </div>

          <h3>{place.name}</h3>

          <div class="place-location">
            📍 {place.area}
          </div>

          <p>
            {place.description}
          </p>

          {#if place.category === 'Animal Help'}
            <a href="/help" class="place-link">
              Go to Animal Help →
            </a>
          {:else}
            <div class="information-label">
              ℹ️ Directory information
            </div>
          {/if}

        </article>
      {/each}

    </div>


    {#if filteredPlaces.length === 0}
      <div class="empty-state">
        <div>🐾</div>
        <h3>No places found</h3>
        <p>
          Try another search or choose a different category.
        </p>
      </div>
    {/if}

  </section>


  <section class="official-section">

    <div class="official-icon">🏛️</div>

    <div>
      <span class="eyebrow">IMPORTANT</span>

      <h2>Verify before visiting.</h2>

      <p>
        Service availability, timings and contact details can change.
        PawConnect provides directory information to help you start your
        search. Please verify current details with the relevant service
        before travelling.
      </p>
    </div>

  </section>


  <section class="help-banner">

    <div>
      <span class="eyebrow">CAN'T FIND WHAT YOU NEED?</span>

      <h2>
        An animal needs help?
      </h2>

      <p>
        Use PawConnect Animal Help to create an injured-animal request or
        offer to help someone else.
      </p>
    </div>

    <a href="/help" class="button white">
      Open Animal Help →
    </a>

  </section>

</div>


<style>
  .places-page {
    background: #fbfaf7;
    color: #26372e;
  }

  .places-hero {
    max-width: 1200px;
    min-height: 570px;
    margin: auto;
    padding: 70px 5%;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    align-items: center;
    gap: 40px;
  }

  .eyebrow {
    color: #9a604c;
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .15em;
  }

  .hero-content h1 {
    margin: 18px 0;
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.2rem, 6vw, 5.5rem);
    line-height: .98;
  }

  .hero-content h1 em {
    color: #b9654c;
  }

  .hero-content > p {
    max-width: 570px;
    color: #69736d;
    font-size: 1.08rem;
    line-height: 1.8;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    margin-top: 28px;
    flex-wrap: wrap;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 13px 19px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 700;
  }

  .button.primary {
    background: #26382f;
    color: white;
  }

  .button.secondary {
    background: #eee8dd;
    color: #26382f;
  }

  .button.white {
    background: white;
    color: #26382f;
  }

  .hero-visual {
    position: relative;
    height: 410px;
    display: grid;
    place-items: center;
  }

  .hero-circle {
    width: 320px;
    height: 320px;
    display: grid;
    place-items: center;
    border-radius: 48% 52% 50% 45%;
    background: #e8d2bf;
    font-size: 8rem;
    transform: rotate(-7deg);
    box-shadow: 0 25px 60px #29372b1c;
  }

  .hero-cat,
  .hero-paw {
    position: absolute;
    display: grid;
    place-items: center;
    width: 78px;
    height: 78px;
    border-radius: 22px;
    background: white;
    box-shadow: 0 12px 35px #29372b1c;
    font-size: 2rem;
  }

  .hero-cat {
    top: 25px;
    right: 8%;
  }

  .hero-paw {
    bottom: 25px;
    left: 5%;
  }

  .directory {
    max-width: 1200px;
    margin: auto;
    padding: 80px 5%;
  }

  .section-heading {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: end;
    margin-bottom: 38px;
  }

  .section-heading h2 {
    margin: 10px 0 0;
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.4rem, 4vw, 3.5rem);
    line-height: 1.05;
  }

  .section-heading > p {
    max-width: 430px;
    margin: 0;
    color: #69736d;
    line-height: 1.7;
  }

  .filters {
    margin-bottom: 30px;
  }

  .search-box {
    max-width: 600px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 15px;
    background: white;
    border: 1px solid #e5dfd5;
    border-radius: 14px;
  }

  .search-box span {
    font-size: 1.4rem;
    color: #9a604c;
  }

  .search-box input {
    width: 100%;
    border: 0;
    outline: 0;
    padding: 13px 5px;
    background: transparent;
  }

  .category-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }

  .category-buttons button {
    border: 0;
    border-radius: 999px;
    padding: 9px 15px;
    background: #eee8dd;
    color: #526057;
    cursor: pointer;
  }

  .category-buttons button.active {
    background: #26382f;
    color: white;
  }

  .place-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .place-card {
    min-height: 275px;
    padding: 24px;
    background: white;
    border: 1px solid #eee9e1;
    border-radius: 23px;
    box-shadow: 0 8px 25px #29372b08;
    transition: .2s ease;
  }

  .place-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 35px #29372b12;
  }

  .place-top {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .place-icon {
    width: 54px;
    height: 54px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: #f3e3d7;
    font-size: 1.6rem;
  }

  .place-category {
    padding: 6px 9px;
    border-radius: 999px;
    background: #e3eadf;
    color: #566657;
    font-size: .65rem;
    font-weight: 700;
  }

  .place-card h3 {
    margin: 22px 0 8px;
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
  }

  .place-location {
    color: #9a604c;
    font-size: .78rem;
    font-weight: 600;
  }

  .place-card p {
    color: #69736d;
    font-size: .88rem;
    line-height: 1.7;
  }

  .place-link {
    color: #52675a;
    font-size: .82rem;
    font-weight: 700;
  }

  .information-label {
    color: #888f8a;
    font-size: .72rem;
    margin-top: 18px;
  }

  .empty-state {
    padding: 60px 20px;
    text-align: center;
    border: 1px dashed #d8d1c7;
    border-radius: 22px;
  }

  .empty-state div {
    font-size: 3rem;
  }

  .empty-state h3 {
    font-family: 'Playfair Display', serif;
  }

  .empty-state p {
    color: #737b75;
  }

  .official-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 28px;
    display: flex;
    gap: 22px;
    align-items: start;
    background: #f2eadf;
    border-radius: 24px;
  }

  .official-icon {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 15px;
    background: white;
    font-size: 1.4rem;
  }

  .official-section h2 {
    margin: 8px 0;
    font-family: 'Playfair Display', serif;
  }

  .official-section p {
    margin: 0;
    color: #69736d;
    line-height: 1.7;
  }

  .help-banner {
    padding: 65px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    background: #26382f;
    color: white;
  }

  .help-banner .eyebrow {
    color: #d9b09d;
  }

  .help-banner h2 {
    margin: 12px 0;
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
  }

  .help-banner p {
    max-width: 650px;
    color: #d6ddd8;
    line-height: 1.7;
  }

  @media (max-width: 850px) {
    .places-hero {
      grid-template-columns: 1fr;
    }

    .hero-visual {
      order: -1;
      height: 330px;
    }

    .hero-circle {
      width: 240px;
      height: 240px;
      font-size: 6rem;
    }

    .section-heading {
      display: block;
    }

    .section-heading > p {
      margin-top: 18px;
    }

    .place-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .help-banner {
      display: block;
    }

    .help-banner .button {
      margin-top: 20px;
    }
  }

  @media (max-width: 560px) {
    .places-hero {
      padding-top: 45px;
    }

    .place-grid {
      grid-template-columns: 1fr;
    }

    .hero-actions {
      flex-direction: column;
    }

    .hero-actions .button {
      width: 100%;
    }

    .official-section {
      margin: 0 5% 60px;
    }
  }
</style>