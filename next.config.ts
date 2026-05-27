import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // กำหนดให้ Next.js ทำการ Export ไฟล์ออกมาเป็น Static HTML/CSS/JS (SSG)
  images: {
    unoptimized: true, // จำเป็นต้องใส่ เพราะระบบย่อขนาดรูปภาพอัตโนมัติของ Next.js ต้องใช้เซิร์ฟเวอร์ Node.js รัน
  },
  trailingSlash: true, // ช่วยจัดการเรื่องโฟลเดอร์ของ URL ให้ Netlify เปิดหน้าเว็บและรีเฟรชหน้าได้โดยไม่เจอ 404
};

export default nextConfig;