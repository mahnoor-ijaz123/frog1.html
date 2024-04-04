document.addEventListener('keydown', function(event) {
    const frog = document.getElementById('frog');
    const container = document.querySelector('.container');
    
    // Generate random position within container dimensions
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - frog.width;
    const maxY = containerRect.height - frog.height;
    
    // Generate random coordinates
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    
    // Apply new coordinates
    frog.style.left = newX + 'px';
    frog.style.top = newY + 'px';
  });