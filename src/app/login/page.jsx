"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateField } from '@/utils/validators';

import Image from 'next/image';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const usernameValidationError = validateField(username, 'Username');
    const passwordValidationError = validateField(password, 'Password');

    if (usernameValidationError) {
      setUsernameError(usernameValidationError);
    } else {
      setUsernameError('');
    }

    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
    } else {
      setPasswordError('');
    }

    if (!usernameValidationError && !passwordValidationError) {
      localStorage.setItem('username', username);
      router.push('/');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center mt-5">
            <Image
              className="mx-auto"
              src="/logo-app.jpg"
              width={180}
              height={180}
              alt="App Logo"
            />
            <h2>Comment App</h2>
          </div>
          <div className="card p-4 bg-light bg-gradient mt-4">
            <h4 className="text-center mb-5">
              Login
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError && <p className="text-danger mt-1">{usernameError}</p>}
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="text-danger mt-1">{passwordError}</p>}
              </div>
              <button type="submit" className="btn btn-primary w-full mt-5">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
