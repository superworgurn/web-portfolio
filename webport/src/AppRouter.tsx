// src/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compo/Navbar';
import Hero from './compo/Hero';
import About from './compo/About';
import Skills from './compo/Skills';
import Projects from './compo/Projects';
import Blogs from './compo/Blogs';
import Contact from './compo/Contact';
import Footer from './compo/Footer';
import BlogDetail from './compo/BlogDetail'; 

// หน้า Home Page
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<HomePage />} />
        
        {/* หน้ารายละเอียด Blog */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;