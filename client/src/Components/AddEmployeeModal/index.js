import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css"
import { Form, Button, Container, Card, FloatingLabel } from "react-bootstrap";


function Modal({ closeModal }) {
    return (
       <>
  
        <div>
            
             <div className="modalContainer bg-dark">
                 <div className="titleCloseBtn">
                 <button onClick={() => closeModal(false)}> x </button>
                 </div>
                 <div className="title">
                     <Card.Title className="fw-bolder text-center fs-4 text-info">New Employee Added,</Card.Title>
                 </div>
                 <div className="body">
                 <Card.Title className="fw-bolder text-center fs-4 text-info">Select How To Proceed</Card.Title>
                     
                 </div>
                 <div className="footer">
                     <Button variant="info" type="submit" size="lg" onClick={() => closeModal(false)} id="addAnotherEmp">Add Another Employee</Button>
                     &nbsp;&nbsp;&nbsp;
                     <Link to="/dashboard">
                     <Button variant="info" type="submit" size="lg" >Back to Dashboard</Button>
                     </Link>
               
         
         </div>
         
         </div>
         
         
    
         
       </div>
       <Container className="modalBackground">  </Container> 
       
         
     </>
     )
    
}
export default Modal;