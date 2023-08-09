import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectionTodo from "./components/protection/ProtectionTodo";
import GetDataUser from "./components/protection/getDataUser";
import AnimationLoading from "./components/UI/AnimationLoading";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <GetDataUser/>,
    children: [
      {
        path: "todolist",
        element: <ProtectionTodo />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path:"animation",
        element:<AnimationLoading/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

 
]);

export default Router;
