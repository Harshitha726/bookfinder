import React, { useState } from 'react';


 function TestUseReducer() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mailId,   setMailId]= useState('');
  const [isLoading, showLoader] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    showLoader(true);
    try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === 'Harshitha' && password === 'Harshitha2001' && mailId==='harshitha@gmail.com') {
              resolve();
            } else {
              reject();
            }
          }, 1000);
        });
          setIsLoggedIn(true);


    } catch (error) {
      setError('Incorrect username or password or mailId!');
      showLoader(false);
      setUsername('');
      setPassword('');
      setMailId('');
    }
  };
  return (
    <div className='App'>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
          </>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <input
              type='mailId'
              placeholder='mailId'
              value={mailId}
              onChange={(e) => setMailId(e.currentTarget.value)}
            />
            <button className='submit' type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default TestUseReducer;