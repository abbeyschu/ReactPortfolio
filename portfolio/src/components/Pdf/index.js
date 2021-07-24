import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from './ResumePDF.pdf';
import "./style.css";



function Pdf() {
      
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
    <div className="main">
      <Document
        file={resumePDF}
        >
        <Page pageNumber={1} />
      </Document>
     </div>
    </>
  );
}


export default Pdf