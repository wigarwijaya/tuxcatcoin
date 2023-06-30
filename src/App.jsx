import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import { Home } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
