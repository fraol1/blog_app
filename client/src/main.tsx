import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DarkModeProvider } from "./context/ThemeContext.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DarkModeProvider>
  </React.StrictMode>
);
