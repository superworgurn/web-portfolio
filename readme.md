
# 🚀 Charifkub Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Three.js-r182-000000?style=for-the-badge&logo=threedotjs" alt="Three.js" />
</p>

<p align="center">
  <strong>A modern, interactive 3D portfolio website built with Next.js, React Three Fiber, and Framer Motion optimized for static hosting.</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-scripts">Scripts</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>

---

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, responsive design powered by Tailwind CSS v4
- 🧊 **Interactive 3D Elements**: Immersive 3D scenes using Three.js + React Three Fiber + Drei
- 🌀 **Smooth Animations**: Elegant transitions and micro-interactions with Framer Motion
- 🧭 **App Router Architecture**: Built with Next.js 16 App Router for optimal performance
- ⚡ **SSG Optimized**: Pre-rendered into production-ready static assets via Next.js HTML Export
- 📱 **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- 🔍 **SEO Optimized**: Proper metadata, robots.txt, and web manifest configuration
- 🎯 **Type-Safe**: Full TypeScript support for robust, maintainable code
- 🧹 **Code Quality**: ESLint configured for consistent coding standards

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16.1.4 (Static HTML Export) |
| **Language** | TypeScript 5, JavaScript (ES6+) |
| **UI Library** | React 19.2.3 |
| **Styling** | Tailwind CSS v4, PostCSS |
| **3D Graphics** | Three.js r182, @react-three/fiber, @react-three/drei |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Tooling** | ESLint 9, TypeScript, npm |
| **Deployment** | Netlify (SSG Static Hosting) |

---

## 📁 Project Structure


```

web-portfolio/

├── app/ # Next.js App Router directory

│ ├── compo/ # Reusable 3D/UI components

│ │ └── ThreeScene.tsx # Main 3D scene component (Three.js)

│ ├── Data.ts # Centralized content/data configuration

│ ├── globals.css # Global Tailwind CSS styles

│ ├── layout.tsx # Root layout with metadata & providers

│ └── page.tsx # Main portfolio page (entry point)

├── compo/ # Shared UI components (optional)

├── public/ # Static assets

│ ├── charif.webp # Profile/hero image

│ ├── robots.txt # SEO crawler directives

│ └── site.webmanifest # PWA manifest for installability

├── .gitignore # Git ignore rules

├── eslint.config.mjs # ESLint configuration

├── next.config.ts # Next.js configuration (with output: 'export')

├── package.json # Project dependencies & scripts

├── package-lock.json # Locked dependency versions

├── postcss.config.mjs # PostCSS + Tailwind setup

└── tsconfig.json # TypeScript compiler options

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) ≥ 18.x
- [npm](https://www.npmjs.com/) ≥ 9.x (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/superworgurn/web-portfolio.git
   cd web-portfolio

2.  **Install dependencies**
    
    Bash
    
    ```
    npm install

    ```
    
3.  **Run the development server**
    
    Bash
    
    ```
    npm run dev
    
    ```
    
4.  **Open your browser**
    
    Navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000&authuser=4) to view your portfolio.
    

## 📜 Available Scripts

**Command**

**Description**

`npm run dev`

Start development server with HMR

`npm run build`

Compiles production site and generates static assets into the `out/` folder

`npm run lint`

Run ESLint to check code quality

> 💡 **Local Export Preview**: You can preview the production static export locally by running `npx serve out` after a successful build execution.

## 🌐 Deployment

This project is fully configured for **[Netlify Static HTML Export (SSG)](https://www.netlify.com/)**.

### Continuous Deployment via Git (Recommended)

1.  Connect your GitHub repository to your **Netlify Dashboard**.
    
2.  Configure your project **Build settings** with the following values:
    
    -   **Build command:** `npm run build`
        
    -   **Publish directory:** `out`
        
3.  Click **Deploy site**. Netlify will automatically rebuild your portfolio every time you push updates to GitHub.
    

### Manual Deployment via Netlify CLI

Alternatively, you can manually build and deploy directly from your local terminal:

Bash

```
# Install Netlify CLI globally
npm i -g netlify-cli

# Build the project (creates the 'out' directory)
npm run build

# Deploy the static output
netlify deploy --dir=out --prod
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository
    
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
    
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
    
4.  Push to the branch (`git push origin feature/AmazingFeature`)
    
5.  Open a Pull Request
    

## 📄 License

This project is licensed under the **GNU License** - see the [LICENSE](https://www.google.com/search?q=LICENSE&authuser=4) file for details.

## 👤 Author

**Charifkub (superworgurn)** 🔗 [GitHub](https://github.com/superworgurn)

💼 Portfolio: _Live link coming soon_

## 🇹🇨 Thai Version (ภาษาไทย)


# 🚀 พอร์ตโฟลิโอของ ชารีฟ (Charifkub Portfolio)

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Three.js-r182-000000?style=for-the-badge&logo=threedotjs" alt="Three.js" />
</p>

<p align="center">
  <strong>เว็บไซต์พอร์ตโฟลิโอสมัยใหม่แบบอินเทอร์แอคทีฟ 3 มิติ สร้างด้วย Next.js, React Three Fiber และ Framer Motion ปรับแต่งเพื่อการโฮสต์แบบสแตติกโดยเฉพาะ</strong>
</p>

<p align="center">
  <a href="#-คุณสมบัติ">คุณสมบัติ</a> •
  <a href="#-เทคโนโลยีที่ใช้">เทคโนโลยีที่ใช้</a> •
  <a href="#-โครงสร้างโปรเจกต์">โครงสร้างโปรเจกต์</a> •
  <a href="#-เริ่มต้นใช้งาน">เริ่มต้นใช้งาน</a> •
  <a href="#-สคริปต์ที่ใช้งานได้">สคริปต์</a> •
  <a href="#-การปรับใช้">การปรับใช้</a> •
  <a href="#-การมีส่วนร่วม">การมีส่วนร่วม</a> •
  <a href="#-สัญญาอนุญาต">สัญญาอนุญาต</a>
</p>

---

## ✨ คุณสมบัติ

- 🎨 **ดีไซน์ทันสมัย**: การออกแบบที่สะอาดและรองรับทุกหน้าจอด้วย Tailwind CSS v4
- 🧊 **เอฟเฟกต์ 3 มิติแบบอินเทอร์แอคทีฟ**: ฉาก 3 มิติที่น่าตื่นตาตื่นใจด้วย Three.js + React Three Fiber + Drei
- 🌀 **แอนิเมชันลื่นไหล**: การเปลี่ยนหน้าและลูกเล่นเล็กๆ น้อยๆ ที่สวยงามด้วย Framer Motion
- 🧭 **สถาปัตยกรรม App Router**: สร้างด้วย Next.js 16 App Router เพื่อประสิทธิภาพสูงสุด
- ⚡ **ปรับแต่งแบบ SSG**: ประมวลผลและแปลงหน้าเว็บทั้งหมดออกมาเป็นสแตติกไฟล์สำเร็จรูปผ่านคำสั่ง HTML Export
- 📱 **รองรับทุกอุปกรณ์**: ใช้งานได้อย่างสมบูรณ์บนเดสก์ท็อป แท็บเล็ต และมือถือ
- 🔍 **ปรับแต่งสำหรับ SEO**: การตั้งค่าเมตาดาต้า, robots.txt และ web manifest อย่างถูกต้อง
- 🎯 **Type-Safe**: รองรับ TypeScript เต็มรูปแบบเพื่อโค้ดที่แข็งแกร่งและบำรุงรักษาง่าย
- 🧹 **คุณภาพโค้ด**: กำหนดค่า ESLint เพื่อมาตรฐานการเขียนโค้ดที่สม่ำเสมอ

---

## 🛠 เทคโนโลยีที่ใช้

| หมวดหมู่ | เทคโนโลยี |
|----------|-----------|
| **เฟรมเวิร์ก** | Next.js 16.1.4 (Static HTML Export) |
| **ภาษา** | TypeScript 5, JavaScript (ES6+) |
| **UI Library** | React 19.2.3 |
| **การตกแต่ง** | Tailwind CSS v4, PostCSS |
| **กราฟิก 3 มิติ** | Three.js r182, @react-three/fiber, @react-three/drei |
| **แอนิเมชัน** | Framer Motion 12 |
| **ไอคอน** | Lucide React |
| **เครื่องมือ** | ESLint 9, TypeScript, npm |
| **การปรับใช้** | Netlify (สแตติกโฮสติ้ง SSG) |

---

## 📁 โครงสร้างโปรเจกต์


```
web-portfolio/

├── app/ # ไดเรกทอรี App Router ของ Next.js

│ ├── compo/ # คอมโพเนนต์ 3 มิติ/UI ที่นำกลับมาใช้ใหม่ได้

│ │ └── ThreeScene.tsx # คอมโพเนนต์ฉาก 3 มิติหลัก (Three.js)

│ ├── Data.ts # การกำหนดค่าเนื้อหา/ข้อมูลส่วนกลาง

│ ├── globals.css # สไตล์ Tailwind CSS ระดับโลก

│ ├── layout.tsx # เลเอาต์หลักพร้อมเมตาดาต้าและโพรไวเดอร์

│ └── page.tsx # หน้าพอร์ตโฟลิโอหลัก (จุดเข้าใช้งาน)

├── compo/ # คอมโพเนนต์ UI ร่วม (ตัวเลือก)

├── public/ # แอสเซ็ตแบบสแตติก

│ ├── charif.webp # รูปภาพโปรไฟล์/ฮีโร่

│ ├── robots.txt # คำสั่งสำหรับ crawler ของ SEO

│ └── site.webmanifest # Manifest สำหรับ PWA เพื่อการติดตั้ง

├── .gitignore # กฎการละเว้นของ Git

├── eslint.config.mjs # การกำหนดค่า ESLint

├── next.config.ts # การกำหนดค่า Next.js (พร้อมเปิดคำสั่ง output: 'export')

├── package.json # ดีเพนเดนซีและสคริปต์ของโปรเจกต์

├── package-lock.json # เวอร์ชันดีเพนเดนซีที่ถูกล็อก

├── postcss.config.mjs # การตั้งค่า PostCSS + Tailwind

└── tsconfig.json # ตัวเลือกคอมไพเลอร์ TypeScript
```

---

## 🚀 เริ่มต้นใช้งาน

### สิ่งที่จำเป็นล่วงหน้า

ตรวจสอบว่าคุณได้ติดตั้งสิ่งต่อไปนี้:
- [Node.js](https://nodejs.org/) เวอร์ชัน ≥ 18.x
- [npm](https://www.npmjs.com/) เวอร์ชัน ≥ 9.x (หรือใช้ yarn/pnpm)

### การติดตั้ง

1. **โคลนรีโพซิทอรี**
   ```bash
   git clone https://github.com/superworgurn/web-portfolio.git
   cd web-portfolio

2.  **ติดตั้งดีเพนเดนซี**
    
    Bash
    
    ```
    npm install
    
    ```
    
3.  **รันเซิร์ฟเวอร์สำหรับพัฒนา**
    
    Bash
    
    ```
    npm run dev
    
    ```
    
4.  **เปิดเบราว์เซอร์ของคุณ**
    
    ไปที่ [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000&authuser=4) เพื่อดูพอร์ตโฟลิโอของคุณ
    

## 📜 สคริปต์ที่ใช้งานได้

**คำสั่ง**

**คำอธิบาย**

`npm run dev`

เริ่มเซิร์ฟเวอร์พัฒนาแบบมี HMR

`npm run build`

บิลด์โปรเจกต์และทำการส่งออกสแตติกไฟล์ทั้งหมดเก็บไว้ในโฟลเดอร์ `out/`

`npm run lint`

รัน ESLint เพื่อตรวจสอบคุณภาพโค้ด

> 💡 **ทดสอบไฟล์ Export ในเครื่อง**: คุณสามารถเปิดจำลองพรีวิวหน้าเว็บสแตติกที่เพิ่งบิลด์เสร็จภายในเครื่องได้โดยการรันคำสั่ง `npx serve out` ครับ

## 🌐 การปรับใช้ (Deployment)

โปรเจกต์นี้ได้รับการกำหนดค่าให้เหมาะสำหรับการปรับใช้บน **[Netlify (สแตติกโฮสติ้ง SSG)](https://www.netlify.com/)**

### การปรับใช้อัตโนมัติผ่าน Git (แนะนำ)

1.  เชื่อมต่อรีโพซิทอรี GitHub ของคุณเข้ากับ **Netlify Dashboard**
    
2.  ตั้งค่าการบิลด์โปรเจกต์ (**Build settings**) ในหน้าต่างแดชบอร์ดด้วยค่าดังนี้:
    
    -   **Build command:** `npm run build`
        
    -   **Publish directory:** `out`
        
3.  กดปุ่ม **Deploy site** หลังจากนั้นระบบ Netlify จะทำการบิลด์หน้าเว็บไซต์ของคุณให้ใหม่โดยอัตโนมัติในทุกๆ ครั้งที่คุณทำการอัปเดตและพุชโค้ดขึ้นสู่ GitHub
    

### การปรับใช้ด้วยตนเองผ่าน Netlify CLI

หรือคุณสามารถทำการบิลด์และอัปโหลดไฟล์ขึ้นสู่เซิร์ฟเวอร์โดยตรงจากเทอร์มินัลในเครื่องได้เลยครับ:

Bash

```
# ติดตั้ง Netlify CLI แบบ Global
npm i -g netlify-cli

# สั่งบิลด์แอปพลิเคชัน (ระบบจะสร้างโฟลเดอร์ 'out' ขึ้นมา)
npm run build

# สั่งอัปโหลดขึ้นโฮสต์จริง
netlify deploy --dir=out --prod
```

## 🤝 การมีส่วนร่วม

เรายินดีต้อนรับการมีส่วนร่วม! กรุณาทำตามขั้นตอนต่อไปนี้:

1.  ฟอร์ก รีโพซิทอรี
    
2.  สร้างสาขาของคุณ (`git checkout -b feature/AmazingFeature`)
    
3.  ยืนยันการเปลี่ยนแปลงของคุณ (`git commit -m 'Add some AmazingFeature'`)
    
4.  ผลักดันไปยังสาขา (`git push origin feature/AmazingFeature`)
    
5.  เปิด Pull Request
    

## 📄 สัญญาอนุญาต

โปรเจกต์นี้ได้รับอนุญาตภายใต้ **สัญญาอนุญาต GNU** - ดูรายละเอียดในไฟล์ [LICENSE](https://www.google.com/search?q=LICENSE&authuser=4)

## 👤 ผู้พัฒนา

**ชาริฟคับ (superworgurn)** 🔗 [GitHub](https://github.com/superworgurn)

💼 พอร์ตโฟลิโอ: _ลิงก์ใช้งานจริงเร็วๆ นี้_