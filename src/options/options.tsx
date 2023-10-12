import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/tailwind.css';

import './options.css';

const root = document.createElement('div');
document.body.appendChild(root);

const rootElement = createRoot(root);

const test = (
  <div>
    <h1>Title</h1>
    <h2 className="text-blue-400">Sub</h2>
    <p>Paragraph</p>
  </div>
);

rootElement.render(test);
