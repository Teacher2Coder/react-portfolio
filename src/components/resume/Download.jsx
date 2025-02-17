import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Download = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button 
        variant="primary"
        style={{ marginBottom: "15px" }}
        onClick={handleShow}
      >
        Click here to download a copy of my resume!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select a version for download:</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="/resume/E.Owens_Resume.docx"
            id='download'
            className="btn btn-secondary"
            style={{ width: "100%", marginBottom: "10px" }}
            onClick={handleClose}
          >
            .docx
          </a>
          <a
            href="/resume/E.Owens_Resume.pdf"
            id='download'
            className="btn btn-secondary"
            style={{ width: "100%", marginBottom: "10px" }}
            onClick={handleClose}
          >
            .pdf
          </a>
          <a
            href="/resume/E.Owens_Resume.zip"
            id='download'
            className="btn btn-secondary"
            style={{ width: "100%", marginBottom: "10px" }}
            onClick={handleClose}
          >
            .html
          </a>
          <a
            href="/resume/E.Owens_Resume.txt"
            id='download'
            className="btn btn-secondary"
            style={{ width: "100%", marginBottom: "10px" }}
            onClick={handleClose}
          >
            .txt
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Download;
