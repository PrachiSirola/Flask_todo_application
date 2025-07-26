// main.js - handles global UI functionality such as dark mode toggle
window.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkToggle');

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      darkToggle.textContent = "☀️ Light Mode";
    } else {
      darkToggle.textContent = "🌙 Dark Mode";
    }
  });
});
