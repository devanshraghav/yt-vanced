import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./Utils/Redux/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import BodyContainer from "./components/BodyContainer";
import WatchVideo from "./Pages/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body />,
    children:[
      {
        path:"/",
        element:<BodyContainer />
        
      },
      {
        path:"watch",
        element: <WatchVideo />,
      }
    ]
  },
  
])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
