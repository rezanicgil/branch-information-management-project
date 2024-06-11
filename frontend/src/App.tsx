import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import BranchDetails from "./components/BranchDetails";
import AddBranch from "./components/AddBranch";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "tailwindcss/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="/branch-details/:id" element={<BranchDetails />} />
          <Route path="/new-branch" element={<AddBranch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
