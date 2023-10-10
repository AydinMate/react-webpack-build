import React from 'react';
import { createRoot } from 'react-dom/client';


const root = document.createElement('div');
document.body.appendChild(root);

const rootElement = createRoot(root);

const test = <p>Hello</p>;


rootElement.render(test); 
