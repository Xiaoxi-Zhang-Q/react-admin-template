import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import store from "/@/store";
import RouteInterception from "./components/RouteInterception";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <RouteInterception>
          <App />
        </RouteInterception>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
