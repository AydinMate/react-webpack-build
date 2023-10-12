import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/tailwind.css';

import './options.css';
import { Button } from '@/components/ui/button';

const Options: React.FC<{}> = () => {
  return (
    <div>
      <Button variant='destructive' className='font-bold'>Options</Button>
    </div>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);

const container = createRoot(root);

container.render(<Options />);
