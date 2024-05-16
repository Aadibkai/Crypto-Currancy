import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Details } from "./component/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Design from "./component/Design";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </>
);
