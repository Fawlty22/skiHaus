import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import  { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EMPLOYEE } from "../graphql/mutations.js";
import Modal from "../components/AddEmployeeModal"


const AddEmployee = () => {
  const [formState, setFormState] = useState({

    username: "",
    password: "",


  });
  
 const[openModal, setOpenModal] = useState(false);

  const [addUser, { error, loading }] = useMutation(ADD_EMPLOYEE);

  const handleChange = (e) => {
    console.log(e, formState)
    setFormState({  
   ...formState, 
   [e.target.name]: e.target.value, 
   });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await addUser({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      if (!loading && !error) {
        
       
      }
    } catch (e) {
      console.log(e);
    }
 
  };

  return (
    <Container>
      <h1>Add New Employee</h1>
      <Form id="employeeForm" onSubmit={handleSubmit}>

        <FloatingLabel
          controlId="floatingInput"
          label="username"
          className="mb-3"
        >
          <Form.Control
            name="username"
            type="text"
            placeholder="User Name"
            defaultValue= ""
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="password"
          className="mb-3"
        >
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            defaultValue=""
            onChange={handleChange}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit" onClick={() => setOpenModal(true)}>
          Add New Employee
        </Button>
    {openModal &&    <Modal closeModal={setOpenModal} />}

 
      </Form>
    </Container>
  );
};

export default AddEmployee;