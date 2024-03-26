import React from "react";
import Sidebar from "../components/common/Sidebar";
import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Footer from "../components/common/Footer";
import Center from "../pages/Center/Center";
import CenterAdd from "../pages/Center/CenterAdd";
import CenterEdit from "../pages/Center/CenterEdit";
import CenterView from "../pages/Center/CenterView";
import JopOpening from "../pages/JobOpening/JopOpening";
import JopOpeningAdd from "../pages/JobOpening/JopOpeningAdd";
import JopOpeningEdit from "../pages/JobOpening/JopOpeningEdit";
import JopOpeningView from "../pages/JobOpening/JopOpeningView";

function Admin() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar />
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* <Header /> */}
          <main className="py-6 bg-surface-secondary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* {/ Center  /} */}
              <Route path="/center" element={<Center />} />
              <Route path="/center/add" element={<CenterAdd />} />
              <Route path="/center/edit" element={<CenterEdit />} />
              <Route path="/center/view" element={<CenterView />} />

              {/* Job Opening */}
              <Route path="/jobOpening" element={<JopOpening />} />
              <Route path="/jobOpening/add" element={<JopOpeningAdd />} />
              <Route path="/jobOpening/edit" element={<JopOpeningEdit />} />
              <Route path="/jobOpening/view" element={<JopOpeningView />} />

            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
