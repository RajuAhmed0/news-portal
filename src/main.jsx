import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './Components/Route/route'
import Provider from './Components/Context/Provider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={route}></RouterProvider>
    </Provider>
  </StrictMode>,
)
