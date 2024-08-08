"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <nav className="bg-primary text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl text-uppercase font-bold fst-italic">
            Comment App
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold">
          Hello, admin
        </span>
        <button 
          onClick={handleLogout} 
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          <i className="pi pi-sign-out"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
