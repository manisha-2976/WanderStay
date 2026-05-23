import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { App } from './app';

import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from './context/SearchContext';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <App />
        <Toaster position='top-center'/>
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
);


// SPACE LAYOIUT



