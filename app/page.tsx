'use client';

import { motion, useMotionValue, useSpring, useTransform, Variants, AnimatePresence } from 'framer-motion';
import ThreeScene from '@/compo/ThreeScene';
import { Github, Linkedin, ExternalLink, FileText, Code, Database, Box, Mail, Terminal, 
  Cpu, ShieldCheck,ArrowUp,ArrowRight,LucideIcon } from 'lucide-react';
import { ReactNode, MouseEvent, useState, useEffect } from 'react';
import { projects, articles } from './Data';

// --- TYPES & INTERFACES ---
interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

interface SectionTitleProps {
  children: ReactNode;
  icon?: LucideIcon;
}

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// 1. Tilt Card Component (การ์ดเอียง 3D ตามเมาส์)
function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu perspective-1000 ${className}`}
    >
      <div className="glass-card h-full w-full rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/40 group">
        {children}
        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
}

const SectionTitle = ({ children, icon: Icon }: SectionTitleProps) => (
  <motion.div 
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-6 md:mb-10"
  >
    {Icon && <Icon className="text-cyan-400" size={32} />}
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      {children}
    </h2>
  </motion.div>
);

// Component สำหรับบอกใบ้ว่าเลื่อนซ้ายขวาได้ (แสดงเฉพาะจอเล็ก)
const SwipeHint = () => (
  <div className="md:hidden flex items-center gap-2 text-cyan-400/70 text-sm mb-4 animate-pulse px-2">
    <span>Swipe to explore</span>
    <ArrowRight size={14} />
  </div>
);

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // ตรวจจับการ Scroll เพื่อแสดงปุ่ม Back to Top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ฟังก์ชันเลื่อนขึ้นบนสุด
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // ฟังก์ชันเลื่อนไปที่ Section Projects แบบ Smooth
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center">
        <ThreeScene />
        
        <div className="z-10 text-center px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 backdrop-blur-md"
            >
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Hello World, I'm Worgurn
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none">
              <span className="block mb-2">FULL-STACK</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow animate-gradient">
                DEVELOPER
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              "When I succeed, I will not forget the people who supported me ✌️🤍"
            </p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                onClick={scrollToProjects}
                className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                View Projects
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" 
                className="px-8 py-4 border border-white/20 text-white rounded-full transition-all backdrop-blur-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <FileText size={18} /> Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- 2. ABOUT ME --- */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Terminal}>About Me</SectionTitle>
          
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7 space-y-6 text-gray-300 leading-relaxed text-lg"
            >
              <p className="mb-4">
                สวัสดีครับ ผมชื่อ <span className="text-cyan-400 font-bold">นาย วรกันต์ รื่นพิทักษ์</span> ปัจจุบันกำลังศึกษาที่มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ สาขา ICT
              </p>
              <p className="mb-4">
                ผมมีความสนใจอย่างยิ่งในด้าน <span className="text-white font-medium">ปัญญาประดิษฐ์ (AI)</span>, <span className="text-white font-medium">เทคโนโลยีสารสนเทศ (IT)</span>, <span className="text-white font-medium">การเขียนบล็อก (Blogger)</span>, <span className="text-white font-medium">Cybersecurity</span> และ <span className="text-white font-medium">Social Media</span>
              </p>
              <p>
                ผมมุ่งมั่นในการพัฒนาทักษะและความรู้ในสายงานเทคโนโลยี โดยมีเป้าหมายในการนำความรู้เหล่านี้ไปประยุกต์ใช้ในการสร้างนวัตกรรมใหม่ๆ ที่จะช่วยแก้ไขปัญหาในชีวิตประจำวัน รวมถึงสร้างความปลอดภัยทางด้านข้อมูล
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['#IT', '#Blogger', '#Cybersecurity', '#FullStack'].map((tag, i) => (
                  <motion.span 
                    key={tag} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-sm bg-cyan-900/10 hover:bg-cyan-500/20 cursor-default transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards with Tilt */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <TiltCard className="aspect-square">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Cpu size={40} className="text-purple-500 mb-4" />
                  <h3 className="text-3xl font-bold text-white">ICT</h3>
                  <p className="text-gray-500 text-sm mt-1">Major at SPU</p>
                </div>
              </TiltCard>
              <TiltCard className="aspect-square">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShieldCheck size={40} className="text-green-500 mb-4" />
                  <h3 className="text-3xl font-bold text-white">EN</h3>
                  <p className="text-gray-500 text-sm mt-1">Basic Reading</p>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SKILLS --- */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0a0a]/80">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle icon={Code}>Tech Stack</SectionTitle>
          <SwipeHint />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 md:py-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Frontend */}
            <motion.div variants={fadeInUp} className="w-[85vw] sm:w-[350px] shrink-0 md:w-auto snap-center">
              <TiltCard className="border-t-4 border-t-cyan-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400"><Code size={24} /></div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {["HTML / CSS / JS", "TailwindCSS", "Bootstrap 5", "TypeScript", "React / Next.js"].map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]"></span>{skill}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>

             {/* Backend */}
             <motion.div variants={fadeInUp} className="w-[85vw] sm:w-[350px] shrink-0 md:w-auto snap-center">
              <TiltCard className="border-t-4 border-t-purple-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400"><Database size={24} /></div>
                  <h3 className="text-xl font-bold">Backend</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {["Python / Django", "MS SQL Server", "MongoDB", "PHP", "GO"].map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_5px_purple]"></span>{skill}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>

            {/* OS */}
            <motion.div variants={fadeInUp} className="w-[85vw] sm:w-[350px] shrink-0 md:w-auto snap-center">
              <TiltCard className="border-t-4 border-t-green-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-lg text-green-400"><Box size={24} /></div>
                  <h3 className="text-xl font-bold">Operating System</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {["Windows", "Ubuntu", "Kali Linux", "Mint Linux"].map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_lime]"></span>{skill}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>

            {/* Tools & DevOps */}
            <motion.div variants={fadeInUp} className="w-[85vw] sm:w-[350px] shrink-0 md:w-auto snap-center">
              <TiltCard className="border-t-4 border-t-yellow-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-400"><Terminal size={24} /></div>
                  <h3 className="text-xl font-bold">Tools & DevOps</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {["Git / GitHub", "Docker (Basic)", "n8n (Automation)", "Vercel / Netlify"].map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_5px_yellow]"></span>{skill}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
          
      {/* --- 4. PROJECTS --- */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">PROJECTS</h2>
          <p className="text-gray-400">ผลงานที่ผมสร้างขึ้นมาเพื่อแก้ปัญหา และ ฝึกฝนตัวเอง</p>
        </motion.div>
        <SwipeHint />

        {/* Container สำหรับ Projects */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 md:py-0 md:grid md:grid-cols-2 gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-[85vw] sm:w-[400px] shrink-0 md:w-auto snap-center flex flex-col"
            >
              <TiltCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30">
                      {proj.category}
                    </span>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${proj.title} on GitHub`} className="text-gray-400 hover:text-white bg-white/5 p-2 rounded-full hover:bg-white/10 transition">
                      <Github size={20}/>
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 flex flex-wrap justify-between items-center gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-xs text-gray-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${proj.title}`} className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition shrink-0 group-hover:underline decoration-cyan-400 underline-offset-4">
                    Code <ExternalLink size={14}/>
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. ARTICLES & CONTACT --- */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle icon={FileText}>TOP Articles</SectionTitle>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 mb-20"
          >
            {articles.map((article, idx) => (
              <motion.a 
                key={idx} 
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read article: ${article.title}`}
                variants={fadeInUp}
                className="group block p-5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg text-gray-200 group-hover:text-cyan-400 transition-colors pl-2">
                    {article.title}
                  </span>
                  <span className="text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full font-mono border border-white/5 shrink-0 ml-4">
                    {article.date}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Github, link: "https://github.com/ShoperGamer", color: "hover:bg-white hover:text-black", ariaLabel: "GitHub Profile" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/worgurn-ruenpitak-243a9330a", color: "hover:bg-[#0077b5] hover:text-white", ariaLabel: "LinkedIn Profile" },
                { icon: Mail, link: "mailto:worgurn@gmail.com", color: "hover:bg-cyan-400 hover:text-black", label: "Email Me", ariaLabel: "Send an Email" }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white/5 rounded-full transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 ${item.color} ${item.label ? "px-8 font-bold" : ""}`}
                >
                  <item.icon size={item.label ? 20 : 32}/>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-black">
        <p className="text-gray-600 text-sm font-mono">
          © {new Date().getFullYear()} Crafted by <span className="text-gray-400">Worgurn Ruenpitak</span> | Powered by Next.js
        </p>
      </footer>

      {/* --- FLOATING BACK TO TOP BUTTON --- */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-50 p-3 bg-cyan-500 text-black rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:bg-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}