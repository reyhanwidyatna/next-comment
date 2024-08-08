"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateEmail, validateField } from '@/utils/validators';

import Image from 'next/image';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValidationError = validateField(email, 'Email') || validateEmail(email);
    const passwordValidationError = validateField(password, 'Password');

    if (emailValidationError) {
      setEmailError(emailValidationError);
    } else {
      setEmailError('');
    }

    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
    } else {
      setPasswordError('');
    }

    if (!emailValidationError && !passwordValidationError) {
      localStorage.setItem('username', email.split('@')[0]);
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
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-danger mt-1">{emailError}</p>}
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
