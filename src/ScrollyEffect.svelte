<script>
    let texts = [
    'The highlighted river systems are flagged as pollution hot spots due to pollution from sewer overflows or/ damaged or washed away sewer lines.',
    'Quarry Road is on the Palmiet river, one of which is flagged as a pollution hot spot because of sewer overflows.',
    'Talbot tested the river at Papwa Sewgolum on Palmiet River next to Quarry Road. The E.coli level started raising after the flood and remains high today.',
    'Grey dots are all the wastewater treatment works along the polluted rivers.',
    'Around end of April and early May, at least 10 water treatment works registered high level failure on E.coli levels, having over 80000 E.coli per 100ml of water.',
    'By early May, Durban beaches registered high E.coli levels, all red triangles are beach testing point showing poor conditions.',
    'Testing at Umhlanga Rocks Main beach shows over 80000 E.coli per 100ml of water, which is 160 times more than the acceptable level of 500 E.coli per 100ml of water.',
    'By end of 2022, 7 of the 10 water treatment still has poor microbiological compliance. Testing at the beach still shows critical E.coli levels./ All beaches had high e.coli levels in December'
  ];
  
  
    let imagePaths = [
      '../img/map1.jpg',
      '../img/map2.jpg',
      '../img/map8.jpg',
      '../img/map3.jpg',
      '../img/map4.jpg',
      '../img/map6.jpg',
      '../img/map5.jpg',
      '../img/map7.jpg',
    ];
  
    let textOverlay;
    let background;
    let scrollItems;
  
    import { onMount } from 'svelte';


  onMount(() => {
    scrollItems = document.querySelectorAll('.scroll-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(scrollItems).indexOf(entry.target);
          textOverlay.textContent = texts[index];
          background.style.backgroundImage = `url('${imagePaths[index]}')`;
        }
      });
    }, {threshold: 0.5});

    scrollItems.forEach((item) => {
      observer.observe(item);
    });
  });
</script>

  <style>

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./img/map1.png');
  background-size: cover;
  background-position: center;
  z-index: -2; /* Change this value to -2 */
  transition: background-image 1s ease-in-out;
}

.scroll-container {
    position: relative;
    overflow-y: auto;
    height: 100%;
    width: 100%;
}


.text-overlay {
    position: fixed;
    font-size: 2rem;
    color: #fff;
    text-align: left;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 30%;
    transform: translateY(-50%);
    max-width: 600px;
}

/* .scroll-item {
    min-height: 100vh;
} */


.scroll-item {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text-overlay {
  width: 600px;
}
.chart{
    background-color: #F5F5F5;
    position:absolute;
    left:0
}
h4{
    padding-left: 10px;
}
  </style>
  
  <div bind:this={background} class="background"></div>
  <div class="scroll-container">
    <div bind:this={textOverlay} class="text-overlay" id="text-overlay">Text for image 1</div>
    {#each Array(8) as _, index}
    <div class="scroll-item">
        {#if index === 2}
        <div class="chart">
        <h4>Palmiet River Water Sampling Results</h4>
        <img src="../img/line.svg" alt="Chart" />
        </div>
        {/if}
    </div>
    {/each}
  </div>