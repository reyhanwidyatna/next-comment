"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  const handleLogo = () => {
    router.push('/');
  }

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    router.push('/login');
  };

  return (
    <nav className="bg-primary text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogo}>
          <span className="text-2xl text-uppercase font-bold fst-italic">
            Comment App
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <span className="text-lg font-semibold">
          Hello, {username || 'Anonymous'}
        </span>
        <button 
          onClick={handleLogout} 
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
        >
          <i className="pi pi-sign-out"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
