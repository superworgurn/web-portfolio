// --- TYPES & INTERFACES ---
export interface Project {
  title: string;
  desc: string;
  tech: string[];
  category: string;
  link: string;
}

export interface Article {
  title: string;
  date: string;
  link: string;
}

export interface Experience {
  role: string;
  organization: string;
  date: string;
  description: string;
}

export interface Activity {
  title: string;
  type: string;
  date: string;
  description: string;
}

export interface SuccessStory {
  title: string;
  description: string;
  highlight: string;
}

export interface UniStory {
  title: string;
  date: string;
  content: string;
}

// --- DATA ---
export const projects: Project[] = [
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

export const articles: Article[] = [
  { title: "TypeScript คืออะไร", date: "July 2025", link: "https://www.blockdit.com/posts/688b0c3eb2ed8f60ad5b1d3f" },
  { title: "Vite + React คืออะไร", date: "Aug 2025", link: "https://www.blockdit.com/posts/68a41295d12d7c8f566a8de4" },
  { title: "API key คืออะไร", date: "Oct 2025", link: "https://www.blockdit.com/posts/68e0b51070d2e8868434a282" },
  { title: "NextJS คืออะไร", date: "Dec 2025", link: "https://www.blockdit.com/posts/69350609841fbacdf98f7f54" },
  { title: "Rust คืออะไร", date: "Jan 2026", link: "https://www.blockdit.com/posts/696b3e3f8b5b0f4c4dce533b" }
];

export const experiences: Experience[] = [
{
    role: "AI Chatbot & AI Automation",
    organization: "Sripatum University (SPU) x GoDigit",
    date: "Oct 2025",
    description: "เข้าร่วมอบรมเชิงปฏิบัติการการสร้าง AI Chatbot และระบบ Automation ด้วย n8n รวมถึงการประยุกต์ใช้งานแพลตฟอร์ม Chat X โดยผู้เชี่ยวชาญจากบริษัท GoDigit เพื่อเรียนรู้การนำเทคโนโลยี AI มาเพิ่มประสิทธิภาพการทำงาน"
  },
{
    role: "SPU CTF 2026",
    organization: "Sripatum University (SPU)",
    date: "Feb 2026",
    description: "เข้าร่วมประลองทักษะความปลอดภัยทางไซเบอร์ในรายการ SPU CTF 2026 ฝึกฝนการแก้โจทย์ปัญหาด้าน Web Security และ Ethical Hacking พร้อมฝึกทักษะการแก้ปัญหาเฉพาะหน้าภายใต้เวลาที่จำกัด"
  }
];

export const activities: Activity[] = [
  {
    title: "Tech Blogger on Blockdit",
    type: "Knowledge Sharing",
    date: "Present",
    description: "เขียนและแบ่งปันบทความด้านเทคโนโลยี การพัฒนาเว็บไซต์ และแนวทางการพัฒนาตัวเองอย่างต่อเนื่อง"
  },
  {
    title: "Cybersecurity & Penetration Testing Self-Study",
    type: "Training & Upskill",
    date: "2025 - Present",
    description: "ศึกษาค้นคว้าด้วยตนเองในด้านความปลอดภัยของเครือข่าย เพื่อนำมาประยุกต์ใช้กับการพัฒนา Full-Stack Web Development"
  }
];

export const successStories: SuccessStory[] = [
  {
    title: "Building Privacy-First Web Utilities",
    highlight: "100% Client-Side Processing",
    description: "ประสบความสำเร็จในการพัฒนาเครื่องมือ Web Utility หลายตัว (เช่น Audio Converter, QR Generator) โดยใช้เทคโนโลยีอย่าง WebAssembly ทำให้ผู้ใช้สามารถใช้งานได้โดยไม่ต้องอัปโหลดไฟล์ขึ้นเซิร์ฟเวอร์ ตอบโจทย์ทั้งด้านความรวดเร็วและความเป็นส่วนตัว"
  }
];

export const uniStories: UniStory[] = [
  {
    title: "ชีวิตนักศึกษา ICT ปี 3 ที่ศรีปทุม",
    date: "Jan 2026",
    content: "การเรียนรู้ตลอด 3 ปีที่ผ่านมา สอนให้ผมรู้ว่าการเรียนรู้ด้วยตัวเองสำคัญพอๆ กับในห้องเรียน การได้ลงมือทำโปรเจกต์จริงช่วยเปิดมุมมองใหม่ๆ โดยเฉพาะความชอบในการสร้าง Web Utility Tools ที่ใช้งานได้จริง"
  }
];