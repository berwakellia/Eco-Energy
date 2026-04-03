import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>the about page</h1>} />
            <Route path="/marketing" element={<h1>the marketing size page</h1>} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<h1>the contact page</h1>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;