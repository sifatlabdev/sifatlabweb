import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Lab } from "./components/Lab";
import { Publications } from "./components/Publications";
import { Research } from "./components/Research";
import { PublicEngagement } from "./components/PublicEngagement";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <div className='min-h-screen bg-background min-h-screen flex flex-col'>
        <ScrollToTop />
        <Header />
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Lab />} />
            <Route path='/about' element={<About />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/research' element={<Research />} />
            <Route path='/publicengagement' element={<PublicEngagement />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
