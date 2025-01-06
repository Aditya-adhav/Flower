// Event listener for the button click
document.getElementById('generate-flower').addEventListener('click', function () {
    const flowerArea = document.getElementById('flower-area');
  
    // Create a flower container
    const flower = document.createElement('div');
    flower.className = 'flower';
  
    // Create 8 petals
    for (let i = 0; i < 8; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      flower.appendChild(petal);
    }
  
    // Create the flower center
    const center = document.createElement('div');
    center.className = 'center';
    flower.appendChild(center);
  
    // Add the flower to the flower area
    flowerArea.appendChild(flower);
  });  