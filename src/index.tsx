import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';

const rootNode = (): HTMLElement => {
  const elem = document.createElement('div')
  elem.id = 'root'
  document.body.appendChild(elem)
  return elem
}

const root = createRoot(rootNode())

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

