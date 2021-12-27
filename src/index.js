import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
//components:
import store from "./store/store";
//styles:
import "./index.scss";
import { theme } from "./components/theme/theme";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// BrowserRouter - механизм,читающий урлы
