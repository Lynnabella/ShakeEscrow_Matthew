import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

// Pages
import Home from './pages/home';
import HowItWorks from './pages/howitworks';
import GetPaid from './pages/getpaid';
import SendPayments from './pages/sendpayments';
import FAQ from './pages/faq';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/get-paid" element={<GetPaid />} />
            <Route path="/send-payments" element={<SendPayments />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;