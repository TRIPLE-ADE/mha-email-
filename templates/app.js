const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", function(){
    // Set options for PDF generation
    const options = {
        filename: 'my-report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2},
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait', 'margin': [-50, 10, 10, 10], 'padding': [0, 0, 0, 0], 'height': 'auto', 'width': 'auto' }
      };
  
  // Call html2pdf library to generate PDF
  html2pdf().set(options).from(document.body).save();


})
