import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/FooterSection";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import Album from "./components/Album";
import Photo from "./components/Photo";
// import AuthContext and AuthProvider
import { AuthContext } from "./AuthContext/AuthContext";

function App() {
  const { authenticated } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Header />
        {authenticated ? (
          <React.Fragment>
            <Routes>
              <Route path="/users" element={<Home />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/albums/:id" element={<Album />} />
              <Route path="/albums/:id/photos/:id" element={<Photo />} />
            </Routes>
            <Footer />
          </React.Fragment>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
