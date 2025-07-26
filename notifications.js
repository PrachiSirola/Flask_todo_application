document.addEventListener('DOMContentLoaded', () => {
  const notifDot = document.getElementById('notifDot');
  const notifyBtn = document.getElementById('notifyBtn');
  const clearNotifBtn = document.getElementById('clearNotif');
  let notifActive = false;

  notifyBtn.onclick = () => {
    notifActive = !notifActive;
    notifDot.style.visibility = notifActive ? 'visible' : 'hidden';
    notifyBtn.textContent = notifActive ? 'Disable Notification' : 'Toggle Notification';
  };

  clearNotifBtn.onclick = () => {
    notifActive = false;
    notifDot.style.visibility = 'hidden';
    notifyBtn.textContent = 'Toggle Notification';
  };
});
