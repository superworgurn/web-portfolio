export interface Project { title: string; desc: { en: string; th: string }; tech: string[]; category: { en: string; th: string }; link: string; status?: 'completed' | 'in-progress'; }
export interface Article { title: { en: string; th: string }; date: string; link: string; }
export interface Experience { role: { en: string; th: string }; organization: string; date: string; description: { en: string; th: string }; }
export interface Activity { title: { en: string; th: string }; type: { en: string; th: string }; date: string; description: { en: string; th: string }; }
export interface SuccessStory { title: { en: string; th: string }; highlight: { en: string; th: string }; description: { en: string; th: string }; }
export interface UniStory { title: { en: string; th: string }; date: string; content: { en: string; th: string }; }
export interface SkillGroup { title: { en: string; th: string }; iconKey: string; color: 'cyan' | 'purple' | 'rose' | 'green' | 'orange' | 'yellow' | 'gray'; items: string[]; }

export const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navArticles: "Articles",
    heroSub: "Hello World, I'm Worgurn (Charifkub)",
    heroQuote: '"When I succeed, I will not forget the people who supported me ✌️"',
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    scroll: "Scroll",
    aboutTitle: "About Me",
    aboutText: "Hello, my name is Worgurn Ruenpitak. I am currently studying ICT at the Faculty of Information Technology, Sripatum University. I am deeply interested in Artificial Intelligence (AI), Information Technology (IT), Tech Blogging, Cybersecurity, and Social Media. I am committed to developing my skills and knowledge in technology, with the goal of applying them to create innovative solutions for everyday problems, enhance data security, and optimize technological efficiency within organizations. I look forward to the opportunity to contribute my skills and grow with your organization. Thank you.",
    ictSub: "Major at SPU",
    enSub: "Basic Reading",
    expTitle: "Experience & Success Story",
    expSubTitle: "Experience & Accomplishments",
    successStoriesTitle: "Success Story",
    skillsTitle: "Expert Skills & Tech Stack",
    swipeHint: "Swipe to explore",
    activitiesTitle: "Activities & Training",
    projectsTitle: "PROJECTS",
    projectsSub: "Projects built to solve problems and improve my skills",
    topArticles: "TOP Articles",
    uniStoriesTitle: "University Stories",
    connectTitle: "Let's Connect",
    emailMe: "Email Me",
    wip: "WIP",
    codeLink: "Code"
  },
  th: {
    navHome: "หน้าแรก",
    navAbout: "เกี่ยวกับฉัน",
    navExperience: "ประสบการณ์",
    navSkills: "ทักษะ",
    navProjects: "ผลงาน",
    navArticles: "บทความ",
    heroSub: "สวัสดีครับ ผมชื่อ วรกันต์ (Charifkub)",
    heroQuote: '"เมื่อฉันประสบความสำเร็จ ฉันจะไม่ลืมคนที่สนับสนุนฉัน ✌️"',
    viewProjects: "ดูผลงาน",
    downloadResume: "ดาวน์โหลด Resume",
    scroll: "เลื่อนลง",
    aboutTitle: "เกี่ยวกับฉัน",
    aboutText: "สวัสดีครับ ผมชื่อ นาย วรกันต์ รื่นพิทักษ์ ปัจจุบันกำลังศึกษาที่มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ สาขา ICT ผมมีความสนใจอย่างยิ่งในด้านปัญญาประดิษฐ์ (AI), เทคโนโลยีสารสนเทศ (IT), การเขียนบล็อก (Blogger), การรักษาความปลอดภัยทางไซเบอร์ (Cybersecurity) และโซเชียลมีเดีย (Social Media) ผมมุ่งมั่นในการพัฒนาทักษะและความรู้ในสายงานเทคโนโลยี โดยมีเป้าหมายในการนำความรู้เหล่านี้ไปประยุกต์ใช้ในการสร้างนวัตกรรมใหม่ๆ ที่จะช่วยแก้ไขปัญหาในชีวิตประจำวัน รวมถึงสร้างความปลอดภัยทางด้านข้อมูลและเพิ่มประสิทธิภาพในการใช้เทคโนโลยีในองค์กรต่างๆ ผมหวังเป็นอย่างยิ่งว่าจะได้รับโอกาสในการร่วมงานและนำทักษะความสามารถของผมไปพัฒนากับองค์กรของท่าน ขอบคุณครับ",
    ictSub: "สาขา ICT ที่ SPU",
    enSub: "การอ่านขั้นพื้นฐาน",
    expTitle: "ประสบการณ์และผลงานความสำเร็จ",
    expSubTitle: "ประสบการณ์และผลงาน",
    successStoriesTitle: "เรื่องราวความสำเร็จ",
    skillsTitle: "ทักษะและความเชี่ยวชาญ",
    swipeHint: "ปัดเพื่อดูเพิ่มเติม",
    activitiesTitle: "กิจกรรมและการฝึกอบรม",
    projectsTitle: "ผลงานทั้งหมด",
    projectsSub: "ผลงานที่ผมสร้างขึ้นมาเพื่อแก้ปัญหา และ ฝึกฝนตัวเอง",
    topArticles: "บทความยอดนิยม",
    uniStoriesTitle: "เรื่องราวในรั้วมหาวิทยาลัย",
    connectTitle: "ช่องทางการติดต่อ",
    emailMe: "ส่งอีเมลหาฉัน",
    wip: "กำลังพัฒนา",
    codeLink: "ดูโค้ด"
  }
};

export const projects: Project[] = [
  { title: "GG Replay", desc: { en: "AI Desktop App for Voice Conversion & Vocal Separation using Wails, Go, React, and Python inference.", th: "แอปพลิเคชันเดสก์ท็อป AI สำหรับแปลงเสียงและแยกเสียงร้อง โดยใช้ Wails, Go, React และ Python" }, tech: ["Go", "React","Python"], category: { en: "AI / Audio / Desktop", th: "AI / เสียง / เดสก์ท็อป" }, link: "https://github.com/ShoperGamer/GG-Replay", status: "in-progress" },
  { title: "SmartLife with AliceAi", desc: { en: "AI Assistant on LINE OA via n8n Workflow. Automates calendar alerts & motivation mode.", th: "ผู้ช่วย AI บน LINE OA ผ่าน n8n Workflow ช่วยแจ้งเตือนปฏิทินและโหมดสร้างแรงบันดาลใจอัตโนมัติ" }, tech: ["n8n", "Ollama","Docker"], category: { en: "AI Automation / LINE Bot", th: "AI Automation / ไลน์บอต" }, link: "https://github.com/ShoperGamer/SmartLife-with-AliceAi", status: "in-progress" },
  { title: "Simple Image Converter", desc: { en: "100% client-side browser tool for converting images & PDFs. Fast & privacy-focused.", th: "เครื่องมือแปลงไฟล์รูปภาพและ PDF บนเบราว์เซอร์ฝั่งไคลเอนต์ 100% รวดเร็วและเน้นความเป็นส่วนตัว" }, tech: ["HTML", "Bootstrap", "JavaScript"], category: { en: "Web Utility", th: "เครื่องมือเว็บ" }, link: "https://github.com/ShoperGamer/Simple-Image-Converter", status: "completed" },
  { title: "SwiftQR", desc: { en: "Fast QR code generator with customizable themes and built-in Dark Mode.", th: "เครื่องมือสร้างรหัส QR อย่างรวดเร็วพร้อมธีมที่ปรับแต่งได้และโหมดมืดในตัว" }, tech: ["HTML", "Bootstrap", "JavaScript"], category: { en: "Web Utility", th: "เครื่องมือเว็บ" }, link: "https://github.com/ShoperGamer/SwiftQR", status: "completed" },
  { title: "Audio Converter", desc: { en: "Browser-based audio conversion powered by WebAssembly (FFmpeg). Zero server uploads.", th: "การแปลงไฟล์เสียงบนเบราว์เซอร์ขับเคลื่อนด้วย WebAssembly (FFmpeg) ไม่มีการอัปโหลดขึ้นเซิร์ฟเวอร์" }, tech: ["TypeScript", "WebAssembly", "FFmpeg"], category: { en: "Utility / Wasm", th: "เครื่องมือ / Wasm" }, link: "https://github.com/ShoperGamer/audioconverter", status: "completed" },
  { title: "YouTube Embed Converter", desc: { en: "Converts YouTube links to optimized embed code. SEO & performance-friendly.", th: "แปลงลิงก์ YouTube เป็นโค้ดฝังที่ปรับแต่งมาอย่างดี เป็นมิตรต่อ SEO และประสิทธิภาพการโหลด" }, tech: ["Tailwind CSS", "JavaScript"], category: { en: "Web Utility", th: "เครื่องมือเว็บ" }, link: "https://github.com/ShoperGamer/YouTube-Embed-Converter", status: "completed" }
];

export const articles: Article[] = [
  { title: { en: "What is TypeScript?", th: "TypeScript คืออะไร" }, date: "Jul 2025", link: "https://www.blockdit.com/posts/688b0c3eb2ed8f60ad5b1d3f" },
  { title: { en: "What is Vite + React?", th: "Vite + React คืออะไร" }, date: "Aug 2025", link: "https://www.blockdit.com/posts/68a41295d12d7c8f566a8de4" },
  { title: { en: "What is an API key?", th: "API key คืออะไร" }, date: "Oct 2025", link: "https://www.blockdit.com/posts/68e0b51070d2e8868434a282" },
  { title: { en: "What is Next.js?", th: "Next.js คืออะไร" }, date: "Dec 2025", link: "https://www.blockdit.com/posts/69350609841fbacdf98f7f54" },
  { title: { en: "What is Rust?", th: "Rust คืออะไร" }, date: "Jan 2026", link: "https://www.blockdit.com/posts/696b3e3f8b5b0f4c4dce533b" }
];

export const experiences: Experience[] = [
  { role: { en: "AI Chatbot & AI Automation Workshop", th: "เวิร์กชอป AI Chatbot & AI Automation" }, organization: "Sripatum University x GoDigit", date: "Oct 2025", description: { en: "Trained in AI chatbot development and n8n workflow automation. Applied AI platforms to optimize business processes.", th: "ฝึกอบรมการพัฒนา AI Chatbot และการทำงานอัตโนมัติด้วย n8n ประยุกต์ใช้แพลตฟอร์ม AI เพื่อเพิ่มประสิทธิภาพกระบวนการทางธุรกิจ" } },
  { role: { en: "Cybersecurity Capture The Flag (CTF)", th: "การแข่งขัน Cybersecurity Capture The Flag (CTF)" }, organization: "Sripatum University", date: "Feb 2026", description: { en: "Competed in SPU CTF 2026. Practiced Web Security, Ethical Hacking, and time-constrained problem solving.", th: "เข้าร่วมแข่งขัน SPU CTF 2026 ฝึกฝนด้าน Web Security, Ethical Hacking และการแก้ปัญหาภายใต้เวลาที่จำกัด" } }
];

export const activities: Activity[] = [
  { title: { en: "Tech Blogger", th: "บล็อกเกอร์สายเทคโนโลยี" }, type: { en: "Knowledge Sharing", th: "แบ่งปันความรู้" }, date: "2025 - Present", description: { en: "Writing and sharing articles on web development, AI tools, and continuous learning strategies on Blockdit.", th: "เขียนและแบ่งปันบทความเกี่ยวกับการพัฒนาเว็บ, เครื่องมือ AI และกลยุทธ์การเรียนรู้อย่างต่อเนื่องบน Blockdit" } },
  { title: { en: "Self-Directed Cybersecurity Study", th: "ศึกษาความปลอดภัยทางไซเบอร์ด้วยตนเอง" }, type: { en: "Training & Upskilling", th: "ฝึกฝนและยกระดับทักษะ" }, date: "2025 - Present", description: { en: "Self-studying network security and penetration testing fundamentals to enhance secure Full-Stack development practices.", th: "ศึกษาพื้นฐานความปลอดภัยเครือข่ายและการทดสอบเจาะระบบเพื่อส่งเสริมการพัฒนา Full-Stack ที่ปลอดภัย" } }
];

export const successStories: SuccessStory[] = [
  {
    title: { en: "Privacy-First Web Utilities", th: "เครื่องมือเว็บที่เน้นความเป็นส่วนตัว" },
    highlight: { en: "100% Client-Side Processing", th: "ประมวลผลฝั่งไคลเอนต์ 100%" },
    description: { en: "Developed multiple browser-based tools using WebAssembly, enabling zero-server uploads, faster processing, and complete user data privacy.", th: "พัฒนาเครื่องมือบนเบราว์เซอร์หลายตัวโดยใช้ WebAssembly ทำให้ไม่ต้องอัปโหลดไฟล์ขึ้นเซิร์ฟเวอร์ ประมวลผลเร็วขึ้น และปกป้องความเป็นส่วนตัวของผู้ใช้โดยสมบูรณ์" }
  },
  {
    title: { en: "GG-Replay: AI Audio Desktop App", th: "GG-Replay: แอปเดสก์ท็อป AI สำหรับเสียง" },
    highlight: { en: "Development Opensource", th: "พัฒนาโอเพ่นซอร์ส" },
    description: { en: "Desktop app for AI audio processing (Voice Conversion via RVC, Vocal/Instrument Separation via Demucs/UVR). Built with Wails framework integrating Go backend, React frontend, and Python AI inference server. Inspired by Replay (THE-SINDOL) and weights.com/replay.", th: "แอปเดสก์ท็อปสำหรับการประมวลผลเสียงด้วย AI (การแปลงเสียงผ่าน RVC, การแยกเสียงร้อง/เครื่องดนตรีผ่าน Demucs/UVR) สร้างด้วยเฟรมเวิร์ก Wails ผสานรวมระหว่าง Go backend, React frontend และ Python AI inference server ได้รับแรงบันดาลใจจาก Replay (THE-SINDOL) และ weights.com/replay" }
  }
];

export const uniStories: UniStory[] = [
  { title: { en: "ICT Student Journey @ SPU", th: "เส้นทางนักศึกษา ICT @ SPU" }, date: "Jan 2026", content: { en: "Self-driven learning proved as valuable as classroom study. Building real-world projects, especially Web Utility Tools, solidified my passion for practical Full-Stack development.", th: "การเรียนรู้ด้วยตนเองมีค่าไม่แพ้การเรียนในห้องเรียน การสร้างโปรเจกต์จริง โดยเฉพาะอย่างยิ่งเครื่องมือเว็บยูทิลิตี้ ช่วยเติมเต็มความหลงใหลในการพัฒนา Full-Stack เชิงปฏิบัติของฉันให้มั่นคงยิ่งขึ้น" } }
];

export const skillGroups: SkillGroup[] = [
  { title: { en: "Frontend", th: "ฟรอนต์เอนด์ (Frontend)" }, iconKey: "Code", color: "cyan", items: ["HTML/CSS/JS", "TailwindCSS", "Bootstrap", "TypeScript", "React / Next.js"] },
  { title: { en: "Backend", th: "แบ็คเอนด์ (Backend)" }, iconKey: "Server", color: "purple", items: ["Python", "PHP", "Golang"] },
  { title: { en: "Database", th: "ฐานข้อมูล (Database)" }, iconKey: "Database", color: "rose", items: ["MS SQL Server", "MySQL", "MongoDB"] },
  { title: { en: "Operating System", th: "ระบบปฏิบัติการ (OS)" }, iconKey: "Box", color: "green", items: ["Windows", "Ubuntu", "Kali Linux", "Mint Linux"] },
  { title: { en: "DevOps", th: "ดีวอปส์ (DevOps)" }, iconKey: "GitMerge", color: "gray", items: ["Git","GitHub", "Gitea", "Docker"] },
  { title: { en: "Tools & Platforms", th: "เครื่องมือและแพลตฟอร์ม" }, iconKey: "Terminal", color: "yellow", items: ["n8n (Selfhost)","Ollama (Local Ai)", "Vercel", "Render"] }
];