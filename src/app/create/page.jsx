"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateEmail, validateField } from '@/utils/validators';
import { useComments } from '@/context/commentContext';

const Create = () => {
  const router = useRouter()
  
  const {comments, addComment} = useComments()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [bodyError, setBodyError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameErrorMsg = validateField(name, 'Nama');
    const emailErrorMsg = validateField(email, 'Email') || validateEmail(email);
    const bodyErrorMsg = validateField(body, 'Komentar');

    setNameError(nameErrorMsg);
    setEmailError(emailErrorMsg);
    setBodyError(bodyErrorMsg);

    if (!nameErrorMsg && !emailErrorMsg && !bodyErrorMsg) {
      const newComment = {
        id: comments ? comments.length + 1 : null,
        name,
        email,
        body
      }
      addComment(newComment)
      router.push('/')
    }
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-center my-6">
        Buat Komentar Baru
      </h2>
      <div className="flex justify-content-center px-4">
        <div className="col-12 col-md-8 col-lg-6 card bg-light p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="text-danger mt-1">{nameError}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-danger mt-1">{emailError}</p>}
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                value={body}
                rows={3}
                onChange={(e) => setBody(e.target.value)}
              />
              {bodyError && <p className="text-danger mt-1">{bodyError}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-full mt-5">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;