import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader, } from "./routes/contact";
import EditContact, { action as editAction, } from "./routes/edit";
import Test from './routes/test.jsx';
import UserProfile from './routes/profile.jsx';
import LoadScreen from './routes/loading.jsx';
import QrScan from './routes/qrscan.jsx';
import OnlineShop from './routes/online-shop.jsx';
import LocationShop from './routes/location-shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
  {
    path: "/app-v1/sandbox/",
    element: <Test />,
  },
  {
    path: "/app-v1/sandbox/profile",
    element: <UserProfile />,
  },
  {
    path: "/app-v1/sandbox/scan",
    element: <QrScan />,
  },
  {
    path: "/app-v1/sandbox/online-shop",
    element: <OnlineShop />,
  },
  {
    path: "/app-v1/sandbox/location-shop",
    element: <LocationShop />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
