document.addEventListener('DOMContentLoaded', () => {
  const timerInput = document.getElementById('timerInput');
  const timerDisplay = document.getElementById('timerDisplay');
  const startTimerBtn = document.getElementById('startTimer');
  const stopTimerBtn = document.getElementById('stopTimer');
  let timerInterval = null;
  let timeLeft = 0;

  function updateTimerDisplay(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2,'0');
    const s = String(sec % 60).padStart(2,'0');
    timerDisplay.textContent = `${m}:${s}`;
  }

  startTimerBtn.onclick = () => {
    const mins = parseInt(timerInput.value);
    if(isNaN(mins) || mins <= 0) return alert('Enter valid minutes > 0');
    timeLeft = mins * 60;
    updateTimerDisplay(timeLeft);
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      if(timeLeft <= 0){
        clearInterval(timerInterval);
        alert('⏰ Timer ended!');
        updateTimerDisplay(0);
        return;
      }
      updateTimerDisplay(timeLeft);
    }, 1000);
  };

  stopTimerBtn.onclick = () => {
    if(timerInterval){
      clearInterval(timerInterval);
      updateTimerDisplay(0);
      timeLeft=0;
    }
  };
});
