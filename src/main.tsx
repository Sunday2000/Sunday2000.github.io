import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root') as HTMLElement;
// En production, le HTML est pré-rendu au build : on l'hydrate. En dev (#root vide), rendu client classique.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, <App />);
else ReactDOM.createRoot(root).render(<App />);
