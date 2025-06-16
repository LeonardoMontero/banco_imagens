import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";
import Login from "./Login";
import Criarlogin from "./Criarlogin";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<ImageGrid searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Criarlogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
