import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error} from "./pages/Error.tsx";
import {App} from "./pages/App.tsx";
import "the-new-css-reset/css/reset.css"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"
import {SignIn} from "./pages/SignIn.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/sign-in',
    element: <SignIn/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
