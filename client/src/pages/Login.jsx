import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    // const [username, setUsername] = useState('');
    // const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
    const [login, { error }] = useMutation(LOGIN_MUTATION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState, 'line 13 login')
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            console.log(mutationResponse, 'line 18 login')
            const token = mutationResponse.data.login.token;
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
    //         props.setUser({ token: data.login.token, author: data.login.author });
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