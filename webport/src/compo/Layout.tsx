// Layout.tsx
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Blogs from './Blogs';
import Contact from './Contact';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export default Layout;