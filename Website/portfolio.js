// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Granim for the background
  var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
      source: 'assets/snow.jpg',
      blendingMode: 'multiply',
    },
    states : {
      "default-state": {
        gradients: [
          ['#29323c', '#485563'],
          ['#FF6B6B', '#556270'],
          ['#80d3fe', '#7ea0c4'],
          ['#f0ab51', '#eceba3']
        ],
        transitionSpeed: 8000
      }
    }
  });

  // Portfolio Modal Functionality
  // Get all portfolio items and modals
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modals = document.querySelectorAll('.portfolio-modal');
  const closeButtons = document.querySelectorAll('.portfolio-modal .close');
  
  // Set up click handlers for portfolio items
  portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Get the item ID number
      const itemId = this.id.replace('portfolioItem', '');
      const modal = document.getElementById(`portfolioModal${itemId}`);
      
      if (modal) {
        // Prevent the default link behavior
        e.preventDefault();
        e.stopPropagation();
        
        // Show the modal
        modal.style.display = 'block';
        
        // Return false to prevent the link from being followed
        return false;
      }
    });
  });
  
  // Set up click handlers for close buttons
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the parent modal and hide it
      const modal = this.closest('.portfolio-modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
