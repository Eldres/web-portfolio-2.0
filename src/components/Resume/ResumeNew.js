import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume-Josh-Nagel.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Eldres/web-portfolio-2.0/7e2b863ea73fab13ffa9e39bc05c5d92977ca097/src/Assets/Resume-Josh-Nagel.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumeLink}
            className="d-flex justify-content-center"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            pageLayout={"oneColumn"}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 0.87 : 0.6}
                wrap={false}
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
