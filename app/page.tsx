'use client';
import { motion, useMotionValue, useSpring, useTransform, Variants, AnimatePresence, useScroll, useMotionTemplate } from 'framer-motion';
import { Github, Linkedin, ExternalLink, FileText, Code, Database, Box, Mail, Terminal, Cpu, ShieldCheck, ArrowUp, ArrowRight, LucideIcon, Award, HeartHandshake, Trophy, BookOpen, Server, GitMerge } from 'lucide-react';
import { ReactNode, MouseEvent, useState, useEffect } from 'react';
import { projects, articles, experiences, activities, successStories, uniStories, skillGroups, translations } from './Data';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ThreeScene = dynamic(() => import('@/app/compo/ThreeScene'), { ssr: false });

interface TiltCardProps { children: ReactNode; className?: string; }
interface SectionTitleProps { children: ReactNode; icon?: LucideIcon; }

const fadeInUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

const getColorStyles = (color: string) => {
  const map: Record<string, any> = {
    cyan: { border: 'border-t-cyan-500', bg: 'bg-cyan-500/10', text: 'text-cyan-400', hoverBg: 'group-hover:bg-cyan-500/20', hoverText: 'group-hover/item:text-cyan-300', dotBg: 'bg-cyan-500', shadow: 'shadow-[0_0_8px_#06b6d4]' },
    purple: { border: 'border-t-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400', hoverBg: 'group-hover:bg-purple-500/20', hoverText: 'group-hover/item:text-purple-300', dotBg: 'bg-purple-500', shadow: 'shadow-[0_0_8px_#a855f7]' },
    rose: { border: 'border-t-rose-500', bg: 'bg-rose-500/10', text: 'text-rose-400', hoverBg: 'group-hover:bg-rose-500/20', hoverText: 'group-hover/item:text-rose-300', dotBg: 'bg-rose-500', shadow: 'shadow-[0_0_8px_#f43f5e]' },
    green: { border: 'border-t-green-500', bg: 'bg-green-500/10', text: 'text-green-400', hoverBg: 'group-hover:bg-green-500/20', hoverText: 'group-hover/item:text-green-300', dotBg: 'bg-green-500', shadow: 'shadow-[0_0_8px_#22c55e]' },
    yellow: { border: 'border-t-yellow-500', bg: 'bg-yellow-500/10', text: 'text-yellow-400', hoverBg: 'group-hover:bg-yellow-500/20', hoverText: 'group-hover/item:text-yellow-300', dotBg: 'bg-yellow-500', shadow: 'shadow-[0_0_8px_#eab308]' },
    default: { border: 'border-t-zinc-500', bg: 'bg-zinc-500/10', text: 'text-zinc-400', hoverBg: 'group-hover:bg-zinc-500/20', hoverText: 'group-hover/item:text-zinc-300', dotBg: 'bg-zinc-500', shadow: 'shadow-[0_0_8px_#71717a]' }
  };
  return map[color] || map.default;
};

const getIconComponent = (key: string) => {
  const map: Record<string, ReactNode> = { Code: <Code size={24}/>, Server: <Server size={24}/>, Database: <Database size={24}/>, Box: <Box size={24}/>, GitMerge: <GitMerge size={24}/>, Terminal: <Terminal size={24}/> };
  return map[key] || <Code size={24}/>;
};

function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
    glowX.set(clientX - left);
    glowY.set(clientY - top);
  };

  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  // ระบบตรวจจับสีของการ์ดเพื่อปรับสีดวงไฟฉายตามกลุ่มทักษะ/โปรเจกต์
  let colorRGBA = "6, 182, 212"; // สีฟ้า Cyan (ค่าเริ่มต้น)
  if (className.includes("yellow")) colorRGBA = "234, 179, 8";
  else if (className.includes("purple")) colorRGBA = "168, 85, 247";
  else if (className.includes("rose")) colorRGBA = "244, 63, 94";
  else if (className.includes("green")) colorRGBA = "34, 197, 94";
  else if (className.includes("gray")) colorRGBA = "113, 113, 122"; // รองรับกลุ่มสีเทา (Zinc/Gray)

  // สร้าง Gradient แสนไฟฉายพื้นหลัง และแสงวิ่งขอบการ์ดตามพิกัดเมาส์
  const bgGlow = useMotionTemplate`radial-gradient(300px circle at ${glowX}px ${glowY}px, rgba(${colorRGBA}, 0.12), transparent 80%)`;
  const borderGlow = useMotionTemplate`radial-gradient(220px circle at ${glowX}px ${glowY}px, rgba(${colorRGBA}, 0.45), transparent 80%)`;

  return (
    <motion.div 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={() => { x.set(0); y.set(0); }} 
      className={`relative transform-gpu perspective-1000 group ${className}`}
    >
      <div className="glass-card h-full w-full rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.1)] bg-[#050505]/90 border border-white/5 relative overflow-hidden">
        
        {/* เลเยอร์ 1: แสงไฟฉายส่องสว่างด้านในเนื้อหา (Background Spotlight) */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
          style={{ background: bgGlow }}
        />
        
        {/* เลเยอร์ 2: เส้นขอบเรืองแสงวิ่งตามเมาส์ (Dynamic Border Glow Overlay) */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            border: "1px solid transparent",
            backgroundImage: useMotionTemplate`linear-gradient(rgba(5,5,5,0), rgba(5,5,5,0)), ${borderGlow}`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        />

        {/* เลเยอร์ 3: ส่วนเนื้อหาหลัก ถูกยกขึ้นมาให้อยู่เหนือเลเยอร์แสง */}
        <div className="relative z-20 h-full w-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

const SectionTitle = ({ children, icon: Icon }: SectionTitleProps) => (
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-6 md:mb-10">
    {Icon && <Icon className="text-cyan-400" size={32} />}
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">{children}</h2>
  </motion.div>
);

const SwipeHint = ({ text }: { text: string }) => (
  <div className="md:hidden flex items-center gap-2 text-cyan-400/70 text-sm mb-4 animate-pulse px-2" aria-hidden="true">
    <span>{text}</span><ArrowRight size={14} />
  </div>
);

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<'en' | 'th'>('en');
  const { scrollYProgress } = useScroll();

  const t = translations[lang];

  const navLabels: Record<string, string> = {
    home: t.navHome,
    about: t.navAbout,
    experience: t.navExperience,
    skills: t.navSkills,
    projects: t.navProjects,
    articles: t.navArticles,
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
      const sections = ['home', 'about', 'experience', 'skills', 'activities', 'projects', 'articles'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) setActiveSection(section);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-hidden relative" role="main">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left z-[60]" style={{ scaleX: scrollYProgress }} />
      
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 flex gap-4 md:gap-8 pointer-events-auto shadow-2xl shadow-cyan-900/20 overflow-x-auto max-w-full items-center">
          {['home','about','experience','skills','projects','articles'].map(id => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)} className={`text-sm md:text-base font-medium transition-all whitespace-nowrap px-2 py-1 rounded-full ${activeSection === id ? 'text-cyan-400 bg-cyan-500/10 scale-105' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
              {navLabels[id]}
            </a>
          ))}
          <button 
            onClick={() => setLang(prev => prev === 'en' ? 'th' : 'en')}
            className="text-xs md:text-sm font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all shrink-0 ml-2"
          >
            {lang === 'en' ? 'TH' : 'EN'}
          </button>
        </div>
      </motion.nav>

      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        <ThreeScene />
        <div className="z-10 text-center px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 backdrop-blur-md">
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2"><span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />{t.heroSub}</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
              <span className="block mb-2 text-white">FULL-STACK</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow animate-gradient">DEVELOPER</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">{t.heroQuote}</p>
            <motion.div className="flex flex-col md:flex-row gap-5 justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.5)" }} whileTap={{ scale: 0.95 }} href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300">{t.viewProjects}</motion.a>
              <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} href="/resume.pdf" className="px-8 py-4 border border-white/20 text-white rounded-full transition-all backdrop-blur-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 hover:border-white/50"><FileText size={18} /> {t.downloadResume}</motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-xs uppercase tracking-widest">{t.scroll}</span><div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
        </motion.div>
      </section>

      <section id="about" className="py-24 px-6 relative pt-32">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Terminal}>{t.aboutTitle}</SectionTitle>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* ส่วนข้อความประวัติ: แสดงผลเป็นลำดับที่ 2 บนมือถือ (order-2) แต่กลับมาเป็นลำดับที่ 1 บนจอใหญ่ (lg:order-1) */}
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-lg"
            >
              <p>{t.aboutText}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['#IT', '#Blogger', '#Cybersecurity', '#FullStack'].map((tag, i) => (
                  <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-sm bg-cyan-900/10 hover:bg-cyan-500/20 cursor-default transition-colors">{tag}</motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* ส่วนรูปภาพโปรไฟล์และการ์ดไอคอน: ถูกยกมาแสดงผลก่อนเป็นลำดับแรกบนมือถือ (order-1) และไปอยู่ฝั่งขวาบนจอใหญ่ (lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center gap-8 lg:-mt-24">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative w-48 h-48 md:w-64 md:h-64">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.3)] relative z-10">
                  <Image src="/charif.webp" alt="Worgurn Profile" fill sizes="(max-width: 768px) 100vw, 256px" className="w-full h-full object-cover rounded-full border-4 border-[#050505] bg-neutral-900" priority />
                </motion.div>
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl -z-0 animate-pulse" />
              </motion.div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <TiltCard className="aspect-square"><div className="flex flex-col items-center justify-center h-full text-center"><Cpu size={40} className="text-purple-500 mb-4" /><h3 className="text-3xl font-bold text-white">ICT</h3><p className="text-zinc-400 text-sm mt-1">{t.ictSub}</p></div></TiltCard>
                <TiltCard className="aspect-square"><div className="flex flex-col items-center justify-center h-full text-center"><ShieldCheck size={40} className="text-green-500 mb-4" /><h3 className="text-3xl font-bold text-white">EN</h3><p className="text-zinc-400 text-sm mt-1">{t.enSub}</p></div></TiltCard>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent relative pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle icon={Award}>{t.expTitle}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2"><Award size={24}/> {t.expSubTitle}</h3>
              {experiences.map((exp, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2"><h4 className="text-xl font-bold text-white">{exp.role[lang]}</h4><span className="text-xs font-medium text-cyan-400 bg-cyan-900/30 border border-cyan-500/20 px-3 py-1 rounded-full">{exp.date}</span></div>
                  <p className="text-sm text-zinc-400 mb-3">{exp.organization}</p>
                  <p className="text-zinc-300 leading-relaxed text-sm">{exp.description[lang]}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2"><Trophy size={24}/> {t.successStoriesTitle}</h3>
              <div className="grid gap-6">
                {successStories.map((story, idx) => (
                  <TiltCard key={idx} className="h-full border-t-2 border-t-yellow-500/50"><div className="flex flex-col h-full justify-center"><div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]"><Trophy className="text-yellow-400" size={28} /></div><h4 className="text-2xl font-bold text-white mb-2">{story.title[lang]}</h4><p className="text-cyan-400 font-medium mb-4">{story.highlight[lang]}</p><p className="text-zinc-300 leading-relaxed">{story.description[lang]}</p></div></TiltCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-[#0a0a0a]/80 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle icon={Code}>{t.skillsTitle}</SectionTitle>
          <SwipeHint text={t.swipeHint} />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 md:py-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {skillGroups.map((group, idx) => {
              const style = getColorStyles(group.color);
              return (
                <motion.div key={idx} variants={fadeInUp} className="w-[85vw] sm:w-[350px] shrink-0 md:w-auto snap-center flex flex-col">
                  <TiltCard className={`${style.border} border-t-4 h-full flex flex-col ${group.color}`}>
                    <div className="flex items-center gap-3 mb-4"><div className={`p-3 rounded-lg transition-all duration-300 group-hover:scale-110 ${style.bg} ${style.text} ${style.hoverBg}`}>{getIconComponent(group.iconKey)}</div><h3 className="text-xl font-bold text-white">{group.title[lang]}</h3></div>
                    <ul className="space-y-2 mt-2 text-zinc-300 flex-grow">
                      {group.items.map((skill) => (<li key={skill} className="flex items-center gap-3 p-2 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 cursor-default group/item"><span className={`w-2 h-2 rounded-full ${style.dotBg} ${style.shadow} group-hover/item:scale-150 transition-transform duration-300`} /><span className={`font-medium tracking-wide transition-colors duration-300 ${style.hoverText}`}>{skill}</span></li>))}
                    </ul>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="activities" className="py-24 px-6 relative pt-32">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={HeartHandshake}>{t.activitiesTitle}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((act, idx) => (
              <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold text-white">{act.title[lang]}</h3><span className="text-xs px-3 py-1 bg-white/10 rounded-full text-zinc-300 font-medium whitespace-nowrap ml-4">{act.date}</span></div>
                <p className="inline-block text-cyan-400 text-xs px-2 py-1 bg-cyan-500/10 rounded mb-3 font-mono">{act.type[lang]}</p>
                <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{act.description[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4"><div className="h-[2px] w-12 md:w-20 bg-gradient-to-r from-transparent to-cyan-500" /><h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">{t.projectsTitle}</h2><div className="h-[2px] w-12 md:w-20 bg-gradient-to-l from-transparent to-purple-500" /></div>
          <p className="text-zinc-400">{t.projectsSub}</p>
        </motion.div>
        <SwipeHint text={t.swipeHint} />
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 md:py-0 md:grid md:grid-cols-2 gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((proj, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: idx * 0.1, duration: 0.5 }} className="w-[85vw] sm:w-[400px] shrink-0 md:w-auto snap-center flex flex-col">
              <TiltCard className="h-full flex flex-col justify-between border-t-2 border-t-cyan-500/50">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30">{proj.category[lang]}</span>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${proj.title} on GitHub`} className="text-zinc-400 hover:text-white bg-white/5 p-2 rounded-full hover:bg-cyan-500 hover:text-black transition-all"><Github size={20}/></a>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                    {proj.status === 'in-progress' && <span className="px-2 py-0.5 text-xs bg-yellow-500/20 text-yellow-300 rounded border border-yellow-500/30">🚧 {t.wip}</span>}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{proj.desc[lang]}</p>
                </div>
                <div className="border-t border-white/5 pt-4 flex flex-wrap justify-between items-center gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">{proj.tech.map((t, i) => (<span key={i} className="text-xs text-zinc-300 bg-black/40 border border-white/10 px-2 py-1 rounded">{t}</span>))}</div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${proj.title}`} className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition shrink-0 group-hover:underline decoration-cyan-400 underline-offset-4">{t.codeLink} <ExternalLink size={14}/></a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="articles" className="py-24 relative pt-32">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle icon={FileText}>{t.topArticles}</SectionTitle>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              {articles.map((article, idx) => (
                <motion.a key={idx} href={article.link} target="_blank" rel="noopener noreferrer" variants={fadeInUp} className="group block p-5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
                  <div className="flex justify-between items-center"><span className="font-medium text-lg text-zinc-200 group-hover:text-cyan-400 transition-colors pl-2">{article.title[lang]}</span><span className="text-xs text-zinc-400 bg-black/50 px-3 py-1 rounded-full font-mono border border-white/10 shrink-0 ml-4">{article.date}</span></div>
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div>
            <SectionTitle icon={BookOpen}>{t.uniStoriesTitle}</SectionTitle>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {uniStories.map((story, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden hover:border-cyan-500/30 transition-colors">
                  <div className="absolute -right-4 -top-4 text-white/5 rotate-12 pointer-events-none"><BookOpen size={100} /></div>
                  <div className="relative z-10"><div className="flex justify-between items-center mb-3"><h3 className="text-xl font-bold text-white">{story.title[lang]}</h3><span className="text-xs text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded">{story.date}</span></div><p className="text-zinc-300 leading-relaxed text-sm">{story.content[lang]}</p></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="border-t border-white/10 pt-16 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">{t.connectTitle}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Github, link: "https://github.com/ShoperGamer", color: "hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]", ariaLabel: "GitHub Profile" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/worgurn-ruenpitak-243a9330a", color: "hover:bg-[#0077b5] hover:text-white hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]", ariaLabel: "LinkedIn Profile" },
                { icon: Mail, link: "mailto:worgurn@gmail.com", color: "hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]", label: t.emailMe, ariaLabel: "Send an Email" }
              ].map((item, i) => (
                <motion.a key={i} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className={`p-4 bg-white/5 border border-white/10 rounded-full transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 ${item.color} ${item.label ? "px-8 font-bold" : ""}`}>
                  <item.icon size={item.label ? 20 : 32}/>{item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-white/5 bg-black">
        <p className="text-zinc-400 text-sm font-mono">© {new Date().getFullYear()} Crafted by <span className="text-zinc-300">Worgurn Ruenpitak</span> | Powered by Next.js</p>
      </footer>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }} transition={{ duration: 0.2 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" className="fixed bottom-8 right-8 z-50 p-3 bg-cyan-500 text-black rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:bg-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white"><ArrowUp size={24} /></motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}