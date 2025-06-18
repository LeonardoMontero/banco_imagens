import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";
import Login from "./Login";
import Criarlogin from "./Criarlogin";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <ImageGrid
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Criarlogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
