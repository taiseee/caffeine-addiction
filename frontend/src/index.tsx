import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";

import './index.tailwind.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
