import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css"

function Modal({ closeModal }) {
    return (
       <>
       
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>New Employee Added</h1>
                </div>
                <div className="body">
                    <h2>Please Select How To Proceed</h2>
                    
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="addAnotherEmp">Add Another Employee</button>
                    <Link to="/dashboard">
                    <button>Back to Dashboard</button>
                    </Link>
              
            </div>
        </div>
        <div className="modalBackground"> </div>
        </>
      
    )

   
}
export default Modal;