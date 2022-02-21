import React, { useState, useEffect, useReducer } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalContext';
import useEmployeeReducer from '../utils/reducers';
import { UPDATE_EMPLOYEE } from '../utils/actions';
import { Form, Button, Container, FloatingLabel } from "react-bootstrap";

function Login(props) {
    const [state, dispatch] = useStoreContext();
    const [formState, setFormState] = useState({ username: '', password: '' });
    // const [username, setUsername] = useState('');
    // const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
    const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const { token, employee } = mutationResponse.data.login;
            console.log(token, 'line 20 login')
            dispatch({ type: UPDATE_EMPLOYEE, payload: { token: token, _id: employee._id }})
            Auth.login(token);
        }
        catch (e) {
            console.log(e);
           
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
 
    
    // useEffect(() => {
    //     if (data && data.login) {
    //         props.setEmployee({ token: data.login.token, employee: data.login.author });
    //     }
    // }, [data]);

    return (
        <Container>
        <h1>Log In</h1>
        <Form id="employeeForm" onSubmit={handleFormSubmit}>
  
          <FloatingLabel
            controlId="floatingInput"
            label="username"
            className="mb-3"
          >
            <Form.Control
              name="username"
              type="text"
              placeholder="User Name"
            
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
             
              onChange={handleChange}
            />
          </FloatingLabel>
  
  
  
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Container>
     
    );
   
};

export default Login;