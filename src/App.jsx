import React from "react";
import Header from "./components/Header";
import { Route, Routes, NavLink, Link } from "react-router-dom";

const App = () => {
  const About = () => <h1>About Page</h1>;
  const Projects = () => <h1>Projects Page</h1>;
  const Impact = () => <h1>Impact Page</h1>;
  const Locations = () => <h1>Locations Page</h1>;
  const SignIn = () => <h1>Sign In</h1>;
  const SignUp = () => <h1>Sign Up</h1>;

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
