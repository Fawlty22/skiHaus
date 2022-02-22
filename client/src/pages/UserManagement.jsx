import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Card, Container, Button, Form } from 'react-bootstrap'
import  UserManagementSearch  from "../components/UserManagementSearch";
import { EDIT_USER } from "../graphql/mutations";

const UserManagementPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userFound, setUserFound] = useState(false);
  const [editUserFormState, setEditUserFormState] = useState();
  const [emptyLineError, setEmptyLineError] = useState(false);
  const [editUser, { error }] = useMutation(EDIT_USER);

  let employee = Auth.getProfile();
  
  // redirect to login if valid token is not present
  if (!employee) {
    return <Redirect to={"/login"} />
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value == ''){
      setEmptyLineError(true);
    } else{
      setEmptyLineError(false)
      setEditUserFormState({
      ...editUserFormState,
      [name]: value,
    });
    }
    
    
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(emptyLineError){
      return
    }
    const edittedUserResult = await editUser({
      variables: {
        ...editUserFormState,
      },
    });
    
    setUserInfo({});
    setUserFound(false);
  };

  return (
    <Container>
      <Card bg="dark" className="mb-3 mt-3 text-info" >
        <UserManagementSearch
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          userFound={userFound}
          setUserFound={setUserFound}
          setEditUserFormState={setEditUserFormState}
        />
      </Card>

      {userFound && (
        <Card bg="dark" className="text-info" >
          <Card.Title  className="m-1 text-center fw-bold"><h4>Found 'Em! Edit This Customers Info Below.</h4></Card.Title>
          <Form onSubmit={handleFormSubmit} className="m-1">
            <Form.Group className="mb-3 h6" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                defaultValue={userInfo.firstName}
              />
            </Form.Group>

            <Form.Group className="mb-3 h6" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                defaultValue={userInfo.lastName}
                
              />
              
            </Form.Group>

            <Form.Group className="mb-3 h6" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                defaultValue={userInfo.username}
              />
            </Form.Group>

            <Form.Group className="mb-3 h6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                defaultValue={userInfo.email}
              />
            </Form.Group>

            <Form.Group className="mb-3 h6" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
                defaultValue={userInfo.phone}
              />
            </Form.Group>

            <Form.Group className="mb-3 h6" controlId="formBasicBirthdate">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Birth Date"
                name="birthDate"
                onChange={handleChange}
                defaultValue={userInfo.birthDate}
              />
            </Form.Group>
            {emptyLineError && <span className="ml-2 text-danger">Please make sure you've left nothing blank!</span>}
            <Button style={{float: 'right'}}  variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      )}
    </Container>
  );
};

export default UserManagementPage;
