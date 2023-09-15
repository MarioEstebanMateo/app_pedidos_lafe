import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Pedido from "./components/Pedido";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido/:id" element={<Pedido />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
