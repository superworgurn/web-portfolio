'use client';

import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import ThreeScene from '@/compo/ThreeScene';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  FileText, 
  Code, 
  Database, 
  Box, 
  Mail, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  LucideIcon 
} from 'lucide-react';
import { ReactNode, MouseEvent } from 'react';

// --- TYPES & INTERFACES ---

interface Project {
  title: string;
  desc: string;
  tech: string[];
  category: string;
  link: string;
}

interface Article {
  title: string;
  date: string;
  link: string;
}

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

// --- COMPONENTS ---

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
    className="flex items-center gap-3 mb-10"
  >
    {Icon && <Icon className="text-cyan-400" size={32} />}
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      {children}
    </h2>
  </motion.div>
);

// --- DATA ---
const projects: Project[] = [
  {
    title: "Simple Image Converter",
    desc: "เครื่องมือแปลงไฟล์รูปภาพและ PDF บนเบราว์เซอร์ 100% เน้นความรวดเร็วและความเป็นส่วนตัวสูงสุด",
    tech: ["HTML", "Bootstrap", "JS"],
    category: "Utility",
    link: "https://github.com/ShoperGamer/Simple-Image-Converter"
  },
  {
    title: "SwiftQR",
    desc: "สร้าง QR Code รวดเร็ว ปรับแต่งได้หลากหลาย พร้อมโหมด Dark Mode เพื่อประสบการณ์ที่ดีที่สุด",
    tech: ["HTML", "Bootstrap", "JS"],
    category: "Utility",
    link: "https://github.com/ShoperGamer/SwiftQR"
  },
  {
    title: "Audio Converter",
    desc: "แปลงไฟล์เสียงด้วยพลังของ WebAssembly (Wasm) ประมวลผลที่เครื่องผู้ใช้ ไม่ต้องอัปโหลดไฟล์",
    tech: ["TypeScript", "WASM", "FFmpeg"],
    category: "Utility / Wasm",
    link: "https://github.com/ShoperGamer/audioconverter"
  },
  {
    title: "YouTube Embed Converter",
    desc: "แปลงลิงก์ YouTube เป็นโค้ด Embed รองรับ SEO และ Performance สูง เหมาะสำหรับ Web Dev",
    tech: ["Tailwind", "JS"],
    category: "Utility",
    link: "https://github.com/ShoperGamer/YouTube-Embed-Converter" 
  }
];

const articles: Article[] = [
  { title: "TypeScript คืออะไร", date: "July 2025", link: "https://www.blockdit.com/posts/688b0c3eb2ed8f60ad5b1d3f" },
  { title: "Vite + React คืออะไร", date: "Aug 2025", link: "https://www.blockdit.com/posts/68a41295d12d7c8f566a8de4" },
  { title: "API key คืออะไร", date: "Oct 2025", link: "https://www.blockdit.com/posts/68e0b51070d2e8868434a282" },
  { title: "NextJS คืออะไร", date: "Dec 2025", link: "https://www.blockdit.com/posts/69350609841fbacdf98f7f54" },
  { title: "Rust คืออะไร", date: "Jan 2026", link: "https://www.blockdit.com/posts/696b3e3f8b5b0f4c4dce533b" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-hidden">
      
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
                className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full shadow-lg transition-all"
              >
                View Projects
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" 
                className="px-8 py-4 border border-white/20 text-white rounded-full transition-all backdrop-blur-sm flex items-center gap-2"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
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
              <div className="md:col-span-7 space-y-6 text-gray-300 leading-relaxed text-lg">
          
                <p className="mb-4">
                  สวัสดีครับ ผมชื่อ <span className="text-cyan-400 font-bold">นาย วรกันต์ รื่นพิทักษ์</span> ปัจจุบันกำลังศึกษาที่มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ สาขา ICT
                </p>
                <p className="mb-4">
                  ผมมีความสนใจอย่างยิ่งในด้าน <span className="text-white font-medium">ปัญญาประดิษฐ์ (AI)</span>, <span className="text-white font-medium">เทคโนโลยีสารสนเทศ (IT)</span>, <span className="text-white font-medium">การเขียนบล็อก (Blogger)</span>, <span className="text-white font-medium">Cybersecurity</span> และ <span className="text-white font-medium">Social Media</span>
                </p>
                <p>
                  ผมมุ่งมั่นในการพัฒนาทักษะและความรู้ในสายงานเทคโนโลยี โดยมีเป้าหมายในการนำความรู้เหล่านี้ไปประยุกต์ใช้ในการสร้างนวัตกรรมใหม่ๆ ที่จะช่วยแก้ไขปัญหาในชีวิตประจำวัน รวมถึงสร้างความปลอดภัยทางด้านข้อมูล
                </p>
             </div>
              <div className="flex flex-wrap gap-3">
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
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Frontend */}
            <motion.div variants={fadeInUp}>
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
             <motion.div variants={fadeInUp}>
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

            {/* Tools */}
            <motion.div variants={fadeInUp}>
              <TiltCard className="border-t-4 border-t-green-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-lg text-green-400"><Box size={24} /></div>
                  <h3 className="text-xl font-bold">Tools & DevOps</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  {["Git / GitHub", "Docker (Basic)", "n8n (Automation)", "Vercel / Netlify"].map(skill => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_lime]"></span>{skill}
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">PROJECTS</h2>
          <p className="text-gray-400">ผลงานที่ผมสร้างขึ้นมาเพื่อแก้ปัญหา และ ฝึกฝนตัวเอง</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <TiltCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30">
                      {proj.category}
                    </span>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white bg-white/5 p-2 rounded-full hover:bg-white/10 transition">
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
                <div className="border-t border-white/5 pt-4 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-xs text-gray-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition">
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
                variants={fadeInUp}
                className="group block p-5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg text-gray-200 group-hover:text-cyan-400 transition-colors pl-2">
                    {article.title}
                  </span>
                  <span className="text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full font-mono border border-white/5">
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
                { icon: Github, link: "https://github.com/ShoperGamer", color: "hover:bg-white hover:text-black" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/worgurn-ruenpitak-243a9330a", color: "hover:bg-[#0077b5] hover:text-white" },
                { icon: Mail, link: "mailto:worgurn@gmail.com", color: "hover:bg-cyan-400 hover:text-black", label: "Email Me" }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white/5 rounded-full transition-all duration-300 flex items-center gap-2 ${item.color} ${item.label ? "px-8 font-bold" : ""}`}
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
    </main>
  );
}