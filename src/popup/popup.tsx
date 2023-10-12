import React from 'react';
import { createRoot } from 'react-dom/client';
import './popup.css';
import '../styles/tailwind.css';
import { Button } from '../components/ui/button';

const root = document.createElement('div');
document.body.appendChild(root);

const rootElement = createRoot(root);

const test = (
  <div className='flex flex-col'>
    <Button variant="ghost" className="">
      Buttonsss
    </Button>
    <Button variant='destructive'>Cancel</Button>
  </div>
);

rootElement.render(test);
