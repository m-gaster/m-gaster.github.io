// country-blocker.js

// Array of country codes to block
const blockedCountries = [];

// Function to get the viewer's country based on IP address
async function getViewerCountry() {
  try {
    const response = await fetch('https://ipinfo.io?token=f72f84445bc3f8');
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error('Error getting viewer country:', error);
    return null;
  }
}

// Function to block access if the viewer is from a blocked country
async function blockCountry() {
  const viewerCountry = await getViewerCountry();

  if (viewerCountry && blockedCountries.includes(viewerCountry)) {
    // Redirect to a blocked page or display a message
    window.location.href = '/blocked.html'; // Redirect to a blocked page
    // Or display a message:
    // document.body.innerHTML = 'This content is not available in your region.';
  }
}

// Call the blockCountry function when the page loads
window.onload = blockCountry;
