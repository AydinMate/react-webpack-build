import React from 'react';
import { createRoot } from 'react-dom/client';
import './popup.css'
import '../styles/tailwind.css';


const root = document.createElement('div');
document.body.appendChild(root);

const rootElement = createRoot(root);

const test = <p className='text-red-600'>redgggg</p>;


rootElement.render(test); 

