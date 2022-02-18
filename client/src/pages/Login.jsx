import React, { useState, useEffect, useReducer } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalContext';
// import useEmployeeReducer from '../utils/reducers';
import { UPDATE_EMPLOYEE } from '../utils/actions';

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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="*******"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p>The provided credentials are incorrect</p>
                    </div>
                ): null}
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;