import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import './App.css'

import App from './App.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Landing from './pages/Landing';
import Electricity from './pages/Electricity';
import Gasoline from './pages/Gasoline';
import NaturalGas from './pages/NaturalGas'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/me',
        element: <Profile />
      }, {
        path: '/electricity',
        element: <Electricity />
      },
        {
        path: '/gasoline',
        element: <Gasoline />
      }, {
        path: '/naturalgas',
        element: <NaturalGas />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
