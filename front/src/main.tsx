import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error} from "./pages/Error.tsx";
import {App} from "./pages/App.tsx";
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"
import {Login} from "./pages/Login.tsx";
import {Provider} from "react-redux";
import {store} from "./utils/slice/userSlice.ts";
import {Logout} from "./pages/Logout.tsx";
import {Profile} from "./pages/Profile.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/logout',
    element: <Logout/>
  },
  {
    path: '/profile',
    element: <Profile/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
