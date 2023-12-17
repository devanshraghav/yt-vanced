import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import BodyContainer from './components/Body/BodyContainer';
import WatchVideo from './Pages/WatchVideo';
import { Provider } from "react-redux";
import store from './Utils/Redux/store';
// import reportWebVitals from './reportWebVitals';
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