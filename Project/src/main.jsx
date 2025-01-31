import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/Authcontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
 <AuthProvider>

    <App />
   
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
