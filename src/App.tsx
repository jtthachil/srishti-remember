import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Collective from "./pages/Collective";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/collective" element={<Collective />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
