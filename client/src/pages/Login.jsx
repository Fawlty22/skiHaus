import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  useEffect(() => {
    if (data && data.login) {
      props.setUser({ token: data.login.token, author: data.login.author });
    }
  }, [data]);
  
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        login({ variables: { name: username } });
      }}>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
