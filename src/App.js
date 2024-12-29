import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ClientDetails from "./components/ClientDetails";
import Orders from "./components/Orders";
import Overview from "./components/Overview";
import AdminPage from "./components/AdminPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Header />
              <div className="main">
                <Sidebar />
                <div className="content">
                  <ClientDetails />
                  <Orders />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/overview" element={<Overview />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
