document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('exportPdf').onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("🧾 To-Do List", 10, 20);


    let tasks = [];
    if(window.getTasksForChart) {

      tasks = window.storedTasksForExport || [];
    }

    tasks.forEach((t,i) => {
      doc.text(`${i+1}. ${t.text}`, 10, 30 + i*10);
    });
    doc.save("todo-list.pdf");
  };
});
