
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import UserManagement from "./components/UserManagement"
import ProjectManagement from "./components/ProjectManagement"
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/projects" element={<ProjectManagement />} />
      <Route path="*" element={<h2 className="text-center mt-5">404: Page Not Found</h2>} />
    </Routes>
  );
}

export default AppRoutes;