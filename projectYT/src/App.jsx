import {Provider} from "react-redux";
import Body from "./Components/Body";
import AppStore from "./assets/Store/AppStore";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import ContentBody from "./Components/ContentBody";

const route = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    children : [
      {
       path : "/",
       element : <ContentBody/>
      },
      {
        path : "/watchPage",
        element : <WatchPage/>
      }
    ]
  }

]);

function App() {
  

  return (
    <Provider store={AppStore}>
      <RouterProvider router={route}/>
    </Provider>
  )
}

export default App
