import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import BodyContainer from './components/BodyContainer';
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
        element:<Body />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
