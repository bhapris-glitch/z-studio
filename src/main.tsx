/**
 * Zavoka Studio - Client Application Entrypoint
 * Path: src/main.tsx
 * 
 * Responsibilities:
 * - Bootstraps React 18 Concurrent Root onto document.getElementById('root')
 * - Imports global base resets, neural grid patterns, and typography tokens
 * - Initializes dark obsidian studio theme tokens
 * - Ensures fail-safe graceful root element assertion
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Core Global Stylesheets
import './assets/styles/globals.css';
import './assets/styles/theme-dark.css';

// Locate the HTML container mount node
const rootElement = document.getElementById('root');

// Runtime validation ensuring mount node exists
if (!rootElement) {
  const errMsg = '[Zavoka Studio]: Fatal Error - Target container "#root" was not found in index.html DOM hierarchy.';
  console.error(errMsg);
  throw new Error(errMsg);
}

// Initialize React 18 Concurrent Mode root and render application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
