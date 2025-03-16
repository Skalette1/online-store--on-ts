import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
