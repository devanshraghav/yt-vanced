import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import BodyContainer from './components/Body/BodyContainer';
import WatchVideo from './Pages/WatchVideo';
import Results from './Pages/Results';
import { Provider } from "react-redux";
import store from './Utils/Redux/store';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />,
        children: [
          {
            path:"/",
            element:<BodyContainer />
            
          },
          {
            path:"watch",
            element: <WatchVideo />,
          },
          {
            path:"results",
            element: <Results />,
          }
        ]
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  // </React.StrictMode>
);