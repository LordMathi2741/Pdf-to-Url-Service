const express = require('express');
const app = express();
const path = require('path');

// Directorio donde se encuentran tus archivos PDF
const pdfDirectory = '/Volumes/NO NAME/Certificados escaneados 2024';

app.use('/pdfs', express.static(pdfDirectory));

app.listen(3000, () => {
  console.log('Server runing on http://localhost:3000');
});