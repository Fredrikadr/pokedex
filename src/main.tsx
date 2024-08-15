import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


async function startApp() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./__tests__/mocks/browser');
    await worker.start();
  }

  

 

  ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

}

startApp();