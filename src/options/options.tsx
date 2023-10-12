import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/tailwind.css';

import './options.css';
import { Button } from '@/components/ui/button';

const root = document.createElement('div');
document.body.appendChild(root);

const rootElement = createRoot(root);

const options = (
  <div>
    <h1>Title</h1>
    <h2 className="text-blue-400">Sub</h2>
    <Button>Options buttion</Button>
  </div>
);

rootElement.render(options);
