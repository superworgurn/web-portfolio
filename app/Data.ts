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