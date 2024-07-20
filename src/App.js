import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbarr from "./components/Navbarr";
import NavSocialLink from "./components/NavSocialLink";
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PortalPage from "./pages/PortalPage";
import ListingSubForm from "./components/ListingSubForm";
import LeaseSwapPage from "./pages/LeaseSwapPage";
import Blog from "./components/Blog";
import BlogPage from "./pages/BlogPage";
import ReviewPage from "./pages/ReviewPage";
import Footer from "./components/Footer";
import AvailableListingPage from "./pages/AvailableListingPage";
import CommunityPage from "./pages/CommunityPage";
import Signup from '../src/components/Admin/Signup';
import Login from '../src/components/Admin/Login';

import AdminSignup from '../src/components/Admin/AdminSignup';
import AdminLogin from '../src/components/Admin/AdminLogin';
import Admin from '../src/components/Admin/Admin';
import ProtectedRoute from "./pages/ProtectedRoute";

import AdminProtectedRoute from "./pages/AdminProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import AdminPage from "./components/Admin/AdminPage";

function App() {
  const location = useLocation();

  const isAdminRoute =  location.pathname.startsWith("/signup-admin") || 
                        location.pathname.startsWith("/login-admin") || 
                        location.pathname.startsWith("/admin-dashboard");

  return (
    <div>
      {!isAdminRoute && <NavSocialLink />}
      {!isAdminRoute && <Navbarr />}
      <ScrollToTop/>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/tenate-portal" element={<PortalPage />} />
        <Route path="/available-listing" element={<AvailableListingPage />} />
        <Route path="/listing-submission-form" element={<ListingSubForm />} />
        <Route path="/lease-swap" element={<LeaseSwapPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<Blog />} />
        {/* <Route path="/blog/create" element={<BlogWritePage />} /> */}
        <Route path="/review" element={<ReviewPage/>} />
        <Route path="/community" element={<CommunityPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<ProtectedRoute element={<Admin />} />} />
        {/* admin access routes */}
        {/* <Route path="/signup-admin" element={<AdminSignup />} /> */}
        <Route path="/login-admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminProtectedRoute element={<AdminPage />} />} />
      </Routes>
     
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
