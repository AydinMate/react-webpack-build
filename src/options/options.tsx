import React from 'react';
import { createRoot } from 'react-dom/client';


const root = document.createElement('div');
document.body.appendChild(root);

const rootElement = createRoot(root);

const test = <img src="icon.png" alt="" />;


rootElement.render(test); 
