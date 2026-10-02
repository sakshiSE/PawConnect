<svelte:head>
  <title>Animal Care Guide — PawConnect</title>
  <meta
    name="description"
    content="Simple animal care information for dogs and cats from PawConnect."
  />
</svelte:head>

<script>
  let selected = 'All';

  const categories = ['All', 'Dogs', 'Cats', 'Food', 'Safety', 'Injured Animal'];

  const guides = [
    {
      category: 'Dogs',
      icon: '🐶',
      title: 'Basic Dog Care',
      text: 'Learn about everyday routines, exercise, grooming, clean water, safe surroundings and responsible care.'
    },
    {
      category: 'Cats',
      icon: '🐱',
      title: 'Basic Cat Care',
      text: 'Understand everyday cat needs including food, clean water, hygiene, safe spaces and enrichment.'
    },
    {
      category: 'Food',
      icon: '🥣',
      title: 'Food & Feeding',
      text: 'Learn why animals need species-appropriate food, clean water and consistent feeding routines.'
    },
    {
      category: 'Food',
      icon: '🚫',
      title: 'Foods to Avoid',
      text: 'Some foods intended for people can be harmful to animals. Always check whether a food is safe before sharing it.'
    },
    {
      category: 'Safety',
      icon: '🏠',
      title: 'Create a Safe Home',
      text: 'Keep dangerous substances, unsafe plants, electrical cables and small objects away from curious animals.'
    },
    {
      category: 'Safety',
      icon: '🧼',
      title: 'Hygiene & Grooming',
      text: 'Regular grooming and a clean living environment can support everyday comfort and cleanliness.'
    },
    {
      category: 'Dogs',
      icon: '🦮',
      title: 'Exercise & Enrichment',
      text: 'Dogs benefit from appropriate physical activity, play and mental stimulation suited to their age and condition.'
    },
    {
      category: 'Cats',
      icon: '🧶',
      title: 'Cat Enrichment',
      text: 'Safe play, scratching areas, hiding spaces and opportunities to explore can help keep cats engaged.'
    },
    {
      category: 'Safety',
      icon: '💉',
      title: 'Preventive Care',
      text: 'Regular veterinary checkups and appropriate vaccinations can help support an animal’s long-term wellbeing.'
    },
    {
      category: 'Injured Animal',
      icon: '🆘',
      title: 'Found an Injured Animal?',
      text: 'Keep yourself safe, avoid unnecessary handling, and seek appropriate veterinary or animal-welfare assistance.'
    },
    {
      category: 'Injured Animal',
      icon: '❤️',
      title: 'How You Can Help',
      text: 'If someone reports an injured animal on PawConnect, you can use the Animal Help section to offer assistance.'
    },
    {
      category: 'Safety',
      icon: '🐾',
      title: 'Responsible Animal Care',
      text: 'Animals depend on people for safe environments, appropriate care and responsible decisions.'
    }
  ];

  $: filteredGuides =
    selected === 'All'
      ? guides
      : guides.filter((guide) => guide.category === selected);
</script>


<div class="care-page">

  <section class="care-hero">

    <div class="care-hero-copy">
      <span class="eyebrow">PAWCONNECT • LEARN & CARE</span>

      <h1>
        Better care
        <br />
        starts with <em>knowing.</em>
      </h1>

      <p>
        Simple information for everyday animal care — for dogs, cats and
        anyone who wants to understand animals a little better.
      </p>

      <div class="care-hero-buttons">
        <a href="#guides" class="button primary">
          Explore care guides
        </a>

        <a href="/help" class="button light">
          🆘 Animal Help
        </a>
      </div>
    </div>

    <div class="care-hero-art">
      <div class="animal-card dog">
        <span>🐶</span>
        <strong>Dogs</strong>
      </div>

      <div class="animal-card cat">
        <span>🐱</span>
        <strong>Cats</strong>
      </div>

      <div class="care-paw">🐾</div>
    </div>

  </section>


  <section class="important-note">

    <div class="note-icon">🌿</div>

    <div>
      <strong>Simple, practical information.</strong>

      <p>
        These guides are for general education and everyday care. They are
        not a substitute for professional veterinary diagnosis or treatment.
      </p>
    </div>

  </section>


  <section class="guides-section" id="guides">

    <div class="section-heading">

      <div>
        <span class="eyebrow">CARE LIBRARY</span>

        <h2>
          Learn how to
          <br />
          care better.
        </h2>
      </div>

      <p>
        Explore topics for dogs, cats, food, safety and situations where an
        animal may need help.
      </p>

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


    <div class="guide-grid">

      {#each filteredGuides as guide}

        <article class="guide-card">

          <div class="guide-icon">
            {guide.icon}
          </div>

          <span class="guide-category">
            {guide.category}
          </span>

          <h3>{guide.title}</h3>

          <p>
            {guide.text}
          </p>

          <div class="read-label">
            Read guide →
          </div>

        </article>

      {/each}

    </div>

  </section>


  <section class="help-section">

    <div class="help-illustration">
      <div>🆘</div>
      <span>🐶</span>
      <span>🐱</span>
    </div>

    <div>

      <span class="eyebrow">ANIMAL HELP</span>

      <h2>
        Sometimes an animal needs
        <em>more than information.</em>
      </h2>

      <p>
        If you find an injured animal or know someone who needs help, use
        PawConnect Animal Help to create a request or offer to help.
      </p>

      <a href="/help" class="button white">
        Go to Animal Help →
      </a>

    </div>

  </section>

</div>


<style>
  .care-page {
    background: #fbfaf7;
    color: #26372e;
  }

  .eyebrow {
    color: #9a604c;
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .15em;
  }

  .care-hero {
    max-width: 1200px;
    min-height: 600px;
    margin: auto;
    padding: 70px 5%;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 40px;
    align-items: center;
  }

  .care-hero h1 {
    margin: 18px 0;
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.3rem, 6vw, 5.5rem);
    line-height: .98;
  }

  .care-hero h1 em,
  .help-section h2 em {
    color: #b9654c;
  }

  .care-hero-copy > p {
    max-width: 570px;
    color: #69736d;
    font-size: 1.08rem;
    line-height: 1.8;
  }

  .care-hero-buttons {
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

  .button.light {
    background: #eee8dd;
    color: #26382f;
  }

  .button.white {
    background: white;
    color: #26382f;
  }

  .care-hero-art {
    height: 390px;
    position: relative;
    display: grid;
    place-items: center;
  }

  .care-paw {
    width: 300px;
    height: 300px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #dfe9dd;
    font-size: 7rem;
    transform: rotate(-8deg);
    box-shadow: 0 25px 60px #29372b12;
  }

  .animal-card {
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 12px 16px;
    background: white;
    border-radius: 17px;
    box-shadow: 0 12px 35px #29372b18;
  }

  .animal-card span {
    font-size: 1.7rem;
  }

  .animal-card strong {
    font-size: .85rem;
  }

  .animal-card.dog {
    top: 35px;
    left: 2%;
  }

  .animal-card.cat {
    right: 2%;
    bottom: 35px;
  }

  .important-note {
    max-width: 1050px;
    margin: 0 auto 70px;
    padding: 25px;
    display: flex;
    gap: 18px;
    align-items: start;
    border-radius: 22px;
    background: #f2eadf;
  }

  .note-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: white;
    font-size: 1.3rem;
  }

  .important-note strong {
    display: block;
    margin: 3px 0 7px;
  }

  .important-note p {
    margin: 0;
    color: #69736d;
    line-height: 1.7;
  }

  .guides-section {
    max-width: 1200px;
    margin: auto;
    padding: 30px 5% 90px;
  }

  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 40px;
    margin-bottom: 35px;
  }

  .section-heading h2 {
    margin: 10px 0 0;
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.4rem, 4vw, 3.5rem);
    line-height: 1.05;
  }

  .section-heading > p {
    max-width: 430px;
    color: #69736d;
    line-height: 1.7;
    margin: 0;
  }

  .category-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 28px;
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

  .guide-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .guide-card {
    min-height: 265px;
    padding: 25px;
    background: white;
    border: 1px solid #eee9e1;
    border-radius: 23px;
    box-shadow: 0 8px 25px #29372b08;
    transition: .2s ease;
  }

  .guide-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 35px #29372b12;
  }

  .guide-icon {
    width: 55px;
    height: 55px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: #f3e3d7;
    font-size: 1.7rem;
  }

  .guide-category {
    display: inline-block;
    margin-top: 17px;
    color: #9a604c;
    font-size: .65rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .guide-card h3 {
    margin: 9px 0;
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
  }

  .guide-card p {
    color: #69736d;
    font-size: .88rem;
    line-height: 1.7;
  }

  .read-label {
    margin-top: 18px;
    color: #52675a;
    font-size: .78rem;
    font-weight: 700;
  }

  .help-section {
    padding: 80px 8%;
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    align-items: center;
    gap: 60px;
    background: #26382f;
    color: white;
  }

  .help-section h2 {
    max-width: 700px;
    margin: 12px 0 18px;
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.4rem, 4vw, 3.8rem);
    line-height: 1.05;
  }

  .help-section .eyebrow {
    color: #d9b09d;
  }

  .help-section p {
    max-width: 650px;
    color: #d6ddd8;
    line-height: 1.8;
  }

  .help-illustration {
    position: relative;
    width: 280px;
    height: 280px;
    margin: auto;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #dfe9dd;
    color: #26382f;
  }

  .help-illustration > div {
    font-size: 5rem;
  }

  .help-illustration > span {
    position: absolute;
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px #00000015;
    font-size: 1.5rem;
  }

  .help-illustration > span:nth-child(2) {
    top: 20px;
    left: 0;
  }

  .help-illustration > span:nth-child(3) {
    right: 0;
    bottom: 30px;
  }

  @media (max-width: 850px) {
    .care-hero {
      grid-template-columns: 1fr;
    }

    .care-hero-art {
      order: -1;
      height: 320px;
    }

    .care-paw {
      width: 230px;
      height: 230px;
      font-size: 5rem;
    }

    .section-heading {
      display: block;
    }

    .section-heading > p {
      margin-top: 18px;
    }

    .guide-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .help-section {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .care-hero-buttons {
      flex-direction: column;
    }

    .care-hero-buttons .button {
      width: 100%;
    }

    .guide-grid {
      grid-template-columns: 1fr;
    }

    .important-note {
      margin-left: 5%;
      margin-right: 5%;
    }

    .help-section {
      padding: 65px 6%;
    }

    .help-illustration {
      width: 220px;
      height: 220px;
    }
  }
</style>