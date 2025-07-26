document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets: [{
        label: 'Tasks Done',
        backgroundColor: 'rgb(54, 162, 235)',
        data: [0,0,0,0,0,0,0]
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero:true } }
    }
  });

  function updateChart() {
    // Get total tasks from todo.js global
    const totalTasks = window.getTasksForChart ? window.getTasksForChart() : 0;
    let data = [];
    for(let i=0; i<7; i++){
      data.push(i < totalTasks ? 1 + Math.floor(Math.random()*3) : 0);
    }
    chart.data.datasets[0].data = data;
    chart.update();
  }
  window.updateChart = updateChart;

  updateChart();
});
