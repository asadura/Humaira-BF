import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./pages/ScrolltoTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Admin from "./pages/AdminPage";
import Login from "./pages/Auth";

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Always scrolls to top on route change */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
