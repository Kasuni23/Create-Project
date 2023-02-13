
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { useProject} from "../hooks/useProject"
import "./Project.css"
const Createproject =() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectname , setprojectname] =useState('');
  const [description , setdescription] =useState('');
  const [startDate , setstartDate] =useState('');
  const [endDate , setendDate] =useState('');
  const {project, error, isLoading} =  useProject()


  


  const handleSubmit =  async (e) =>{
      e.preventDefault();

      await project(projectname,description,startDate,endDate)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title><br/>
          
        </Modal.Header>
        <Modal.Body>
       
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:'bold'}}>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                autoFocus
                onChange ={(e) => setprojectname(e.target.value)}
                value={projectname}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{fontWeight:'bold'}}>Description</Form.Label>
              <Form.Control as="textarea" rows={3}  onChange ={(e) => setdescription(e.target.value)}
             value={description} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:'bold'}}>Start Date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                onChange ={(e) => setstartDate(e.target.value)}
                 value={startDate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:'bold'}}>End Date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                onChange ={(e) => setendDate(e.target.value)}
                value={endDate}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={isLoading} variant="primary" onClick ={handleSubmit}>
            Create Project
          </Button>
          {error && <div className="error" style={{ padding:" 10px",
                                                    paddingLeft: "65px",
                                                    background:" #ffefef",
                                                    border:" 1px solid var(--error)",
                                                    color: "red",
                                                    borderRadius: "15px",
                                                    margin:" 10px 0",
                                                    marginRight:"55px",
                                                    width:" 340px",
  }}>{error}</div>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Createproject;