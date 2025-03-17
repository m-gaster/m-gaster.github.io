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
// For each portfolio item (1-6), set up modal functionality

// Portfolio Item 1
var portfolioModal1 = document.getElementById("portfolioModal1");
var portfolioItem1 = document.getElementById("portfolioItem1");
var closePortfolioModal1 = document.getElementsByClassName("closePortfolioModal1")[0];

portfolioItem1.onclick = function() {
  portfolioModal1.style.display = "block";
}

closePortfolioModal1.onclick = function() {
  portfolioModal1.style.display = "none";
}

// Portfolio Item 2
var portfolioModal2 = document.getElementById("portfolioModal2");
var portfolioItem2 = document.getElementById("portfolioItem2");
var closePortfolioModal2 = document.getElementsByClassName("closePortfolioModal2")[0];

portfolioItem2.onclick = function() {
  portfolioModal2.style.display = "block";
}

closePortfolioModal2.onclick = function() {
  portfolioModal2.style.display = "none";
}

// Portfolio Item 3
var portfolioModal3 = document.getElementById("portfolioModal3");
var portfolioItem3 = document.getElementById("portfolioItem3");
var closePortfolioModal3 = document.getElementsByClassName("closePortfolioModal3")[0];

portfolioItem3.onclick = function() {
  portfolioModal3.style.display = "block";
}

closePortfolioModal3.onclick = function() {
  portfolioModal3.style.display = "none";
}

// Portfolio Item 4
var portfolioModal4 = document.getElementById("portfolioModal4");
var portfolioItem4 = document.getElementById("portfolioItem4");
var closePortfolioModal4 = document.getElementsByClassName("closePortfolioModal4")[0];

portfolioItem4.onclick = function() {
  portfolioModal4.style.display = "block";
}

closePortfolioModal4.onclick = function() {
  portfolioModal4.style.display = "none";
}

// Portfolio Item 5
var portfolioModal5 = document.getElementById("portfolioModal5");
var portfolioItem5 = document.getElementById("portfolioItem5");
var closePortfolioModal5 = document.getElementsByClassName("closePortfolioModal5")[0];

portfolioItem5.onclick = function() {
  portfolioModal5.style.display = "block";
}

closePortfolioModal5.onclick = function() {
  portfolioModal5.style.display = "none";
}

// Portfolio Item 6
var portfolioModal6 = document.getElementById("portfolioModal6");
var portfolioItem6 = document.getElementById("portfolioItem6");
var closePortfolioModal6 = document.getElementsByClassName("closePortfolioModal6")[0];

portfolioItem6.onclick = function() {
  portfolioModal6.style.display = "block";
}

closePortfolioModal6.onclick = function() {
  portfolioModal6.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == portfolioModal1) {
    portfolioModal1.style.display = "none";
  } else if (event.target == portfolioModal2) {
    portfolioModal2.style.display = "none";
  } else if (event.target == portfolioModal3) {
    portfolioModal3.style.display = "none";
  } else if (event.target == portfolioModal4) {
    portfolioModal4.style.display = "none";
  } else if (event.target == portfolioModal5) {
    portfolioModal5.style.display = "none";
  } else if (event.target == portfolioModal6) {
    portfolioModal6.style.display = "none";
  }
}
