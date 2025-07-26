document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('weatherIcon');
  const temp = document.getElementById('weatherTemp');
  const loc = document.getElementById('weatherLoc');
  
  // Static demo data:
  icon.textContent = '☀️';
  temp.textContent = '25°C';
  loc.textContent = 'Sample City';
});
