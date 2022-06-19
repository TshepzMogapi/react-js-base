import { Document, Page, pdfjs } from "react-pdf";
import { useState } from 'react';

import samplePdf from "./protected-dummy-1234.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyDoc = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
    <Document file={samplePdf} onLoadSuccess={onDocumentLoadSuccess}>
      <Page 
      height={650}
      pageNumber={pageNumber} />
    </Document>

  </div>
  )
};

export default MyDoc;