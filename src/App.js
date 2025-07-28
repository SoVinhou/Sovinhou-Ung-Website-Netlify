import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import ScrollNavigation from "./components/ScrollNavigation";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";

// Context
import { QuoteProvider } from "./contexts/QuoteContext";

function App() {
  return (
    <div className="App">
      <QuoteProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <ScrollNavigation />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </BrowserRouter>
      </QuoteProvider>
    </div>
  );
}

export default App;