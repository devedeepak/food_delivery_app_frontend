import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Section from './Context/Section.js';


const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>   
    <Section>
      <App />
    </Section>  
  </BrowserRouter>
);
