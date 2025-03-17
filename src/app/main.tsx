import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter, RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
    <RouterProvider router={router} />
    </HashRouter>
  </Provider>,
);
