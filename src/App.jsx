import React from "react";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import myState from './context/myState'
import MyState from "./context/myState";
import Footer from "./components/footer/Footer";
import AllBlogs from "./pages/projects/AllProjects";
import About from "./pages/about/About";
import Login from "./pages/Login/Login";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateBlog from "./pages/createBlog/CreateBlog";
import { Toaster } from "react-hot-toast";
import BlogInfo from "./pages/projectinfo/ProjectInfo";
import ServicesPage from "./pages/services/Services";
const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllBlogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/createblog"
              element={
                <ProtectedRouteForAdmin>
                  <CreateBlog />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/services" element = {<ServicesPage/>}/>
          </Routes>
          <Toaster />
          <Footer />
        </Router>
      </MyState>
    </div>
  );
};

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin?.user?.email === "zohaibimtiaz447@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
