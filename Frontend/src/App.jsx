import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<h1>the home page</h1>} />
            <Route path="/about" element={<h1>the about page</h1>} />
            <Route path="/features" element={<h1>the features page</h1>} />
            <Route path="/how-it-works" element={<h1>the HowItWorks page</h1>} />
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