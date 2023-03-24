const texts = [
    'The highlighted river systems are flagged as pollution hot spots due to pollution from sewer overflows or/ damaged or washed away sewer lines. Grey dots are waste water treatment works along the rivers.',
    'Around end of April and early May, at least 10 water treatment works registered high level failure on E.coli levels, having over 80000 E.coli per 100ml of water.',
    'By early May, Durban beaches registered high E.coli levels, all red triangles are beach testing point showing poor conditions.',
    'Testing at Umhlanga Rocks Main beach shows over 80000 E.coli per 100ml of water, which is 160 times more than the acceptable level of 500 E.coli per 100ml of water.',
    'By end of 2022, 7 of the 10 water treatment still has poor microbiological compliance. Testing at the beach still shows critical E.coli levels./ All beaches had high e.coli levels in December'
  ];
  
  const imagePaths = [
    './img/wwtw_river.png',
    './img/high_failures.png',
    './img/beach.png',
    './img/main_beach.png',
    './img/dec_map.png'
  ];
  
  const textOverlay = document.getElementById('text-overlay');
  const background = document.querySelector('.background');
  const scrollItems = document.querySelectorAll('.scroll-item');
  
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
  