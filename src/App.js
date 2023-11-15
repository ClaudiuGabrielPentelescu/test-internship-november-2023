import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
