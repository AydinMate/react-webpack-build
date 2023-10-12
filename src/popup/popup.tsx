import React from 'react';
import { createRoot } from 'react-dom/client';
import '@/popup/popup.css';
import '@/styles/tailwind.css';
import { Button } from '@/components/ui/button';

const Popup: React.FC<{}> = () => {
  return (
    <div>
      <Button>Hi yo</Button>
    </div>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);

const container = createRoot(root);

container.render(<Popup />);
