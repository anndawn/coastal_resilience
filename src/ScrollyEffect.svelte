<script>
    let texts = [
    'Late April last year, the municipality said highlighted river systems are flagged as pollution hot spots due to pollution from sewer overflows or/ damaged or washed away sewer lines.',
    'Palmiet river is one of these flagged pollution hot spots. Quarry Road is situated alongside this river. Palmiet river is a tributary of uMgeni River. Four wastewater treatment plants discharge into uMgeni river or tributary of uMgeni River.',
    'Talbot carried out a water sample test at Papwa Sewgolum on the Palmiet River, near Quarry Road. After the April flood, the E.coli concentration has significantly increased and remains high to this day. On February 21, 2023, the E.coli level at Papwa Sewgolum reached 457,000 counts per 100ml, indicating a critical water situation, as levels above 400 are considered critical.',
    'Water treatment plants are situated along the banks of the rivers. The grey dots denote the locations of all the wastewater treatment facilities present along the rivers.',
    'According to data from the Department of Water and Sanitation’s IRIS dashboard, in late April and early May, at least 10 water treatment facilities reported high E.coli levels, with concentrations reaching 80,000 E.coli per 100ml of water, indicating high-level failures.',
    'Based on municipal data from early May, Durban beaches registered high E.coli levels. All red triangles on the map represent beach testing points, indicating poor water quality conditions.',
    'On May 5, 2022, water testing at Umhlanga Rocks Main beach has revealed an alarming concentration of E.coli : 80,000 per 100ml of water. This is 160 times higher than the acceptable range of 250-500 E.coli per 100ml.',
    "The most recent three months data accessed on 21 Feb 2023 from the Department of Water and Sanitation’s IRIS dashboard showed 7 of the 10 water treatment still has bad microbiological compliance. As per the municipality's records, water testing at the beach around 20th December 2022 shows critical E.coli levels. Umlaas beach shows over 24196 E.coli per 100ml of water."
  ];
  
  
    let imagePaths = [
      '../img/map1.jpg',
      '../img/map2.jpg',
      '../img/map3.jpg',
      '../img/map4.jpg',
      '../img/map5.jpg',
      '../img/map6.jpg',
      '../img/map7.jpg',
      '../img/map8.jpg',
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
 
  width: 80%;
  height: 100%;
  background-image: url('./img/map1.png');
  background-size: contain;
  background-repeat: no-repeat;
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
    
    font-size: 1.5rem;
    color: #fff;
    text-align: left;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 30%;
    transform: translateY(-50%);
    max-width: 650px;
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
  width: 650px;
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