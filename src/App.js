
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./utilites/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store} >
      <RouterProvider router={Router} />
      <ToastContainer theme="colored"/>
    </Provider>
  );
}

export default App;
