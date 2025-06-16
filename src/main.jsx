import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
