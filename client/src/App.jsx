import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SigUp from "./pages/SigUp";
import Signin from "./pages/Signin.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Header from "./components/Header.jsx";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SigUp />} />
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
