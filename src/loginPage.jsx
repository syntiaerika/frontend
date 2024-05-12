import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        name: username,
        password: password
      }),
      redirect: 'follow'
    };

    try {
      const response = await fetch('http://localhost:3000/user/login', requestOptions);
      const result = await response.json();
      console.log(result);
      localStorage.setItem('loginResult', JSON.stringify(result));
      navigate('/home'); 
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;

