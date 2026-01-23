# Portfolio Website - Nawra Danisha Darmanto

Sebuah website portfolio modern dan responsif untuk mahasiswa Psikologi Universitas Indonesia yang menampilkan pengalaman organisasi, project portfolio, dan sertifikasi dengan desain yang clean dan profesional.

## 🌟 Features

### ✨ Modern Design
- **Pink aesthetic theme** dengan aksen coral yang elegan (#F5AFAF, #F9DFDF)
- **Fully responsive design** optimal di semua perangkat (mobile-first approach)
- **Glass morphism effects** untuk tampilan yang modern dan sophisticated
- **Smooth animations** dengan AOS dan custom transitions

### 🎭 Interactive Components
- **3D Profile Card** dengan tilt effects dan floating text
- **ShinyText & BlurText** animations untuk text reveals yang menarik
- **Curved Loop Text** animation di hero section
- **Smooth scroll navigation** dengan active state indicators
- **Interactive experience cards** dengan modal previews

### 📱 Responsive Navigation
- **PillNav** dengan GSAP animations dan morphing pills
- **Mobile-friendly** hamburger menu dengan smooth transitions
- **Smooth scrolling** ke setiap section dengan active state tracking
- **Fixed navigation** dengan glass effect saat scroll

### 🎯 Sections

#### 🏠 Hero Section
- Profile card dengan 3D tilt effects
- Animated name dan title dengan floating decorations
- CTA buttons (Download CV, Explore Portfolio)
- Instagram status indicator dengan pulse animation
- Curved loop text animation

#### 👤 About Me
- Photo frame dengan frame animations
- Personal story dan academic journey
- Skills showcase dan interests
- Glass card design dengan bento grid layout

#### 💼 Experience
- 13+ organizational experiences across 3 categories:
  - Social Media (Content creation, branding)
  - Corporate Skills (BA Coordinator, Project Management)
  - Advocational Aspect (Gender equality, civic awareness)
- Filterable experience cards by category
- Detailed modal views dengan role descriptions, skills, dan impact

#### 📁 Portfolio
- 3 featured projects (BUNCH, UISM Content Creation, Artmosphere)
- Multi-image galleries dengan preview
- External links ke published content
- Responsive grid layout dengan hover effects

#### 🏆 Certificates
- 2 professional certifications:
  - U-Shape Psikologi UI - 2025
  - Bahasa Isyarat Level 1 - 2026
- Certificate preview images
- Direct links ke Google Drive certificates
- Responsive grid layout

#### 📞 Contact
- Contact form dengan email integration
- Quick contact methods (Email, Instagram, LinkedIn, Location)
- Social media links dengan copy email functionality
- Animated form elements dengan validation

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - UI library dengan hooks
- **Vite 6.0.11** - Lightning-fast build tool dan dev server

### Styling & UI
- **Tailwind CSS 4.x** - Utility-first CSS framework via @tailwindcss/vite
- **Custom CSS modules** - Component-specific styling
- **AOS 3.0.0** - Animate On Scroll library

### Animations & Effects
- **GSAP 3.13.0** - Professional animation library (PillNav morphing)
- **Framer Motion 12.x** - React animation library untuk text effects
- **Custom CSS animations** - Sparkles, pulses, hover effects

### Icons & Assets
- **React Icons 5.5.0** - Comprehensive icon library
  - `react-icons/fa` - Font Awesome icons
  - `react-icons/fi` - Feather icons

### State Management & Hooks
- **Custom hooks**:
  - `useIntersectionObserver` - Scroll-based visibility detection
  - `useStaggeredAnimation` - Sequential animation triggers
  - `useAdvancedInteractions` - Gesture dan drag interactions

## 🚀 Getting Started

### Prerequisites
- Node.js v18 atau lebih baru
- npm atau yarn

### Installation

1. **Navigate ke project directory**
   ```bash
   cd portfolio_awa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:5173/
   ```

> **Note:** Base path `/` untuk deployment di Vercel/Netlify. Ubah ke `/portofolio/` jika deploy ke GitHub Pages dengan repo name.

## 📁 Project Structure

```
portfolio_awa/
├── public/
│   ├── assets/                    # Static assets
│   │   ├── profile.jpg           # Profile photo
│   │   ├── certificate-01.jpg    # U-Shape certificate
│   │   ├── certificate-02.jpg    # Bahasa Isyarat certificate
│   │   ├── bunch-1.png           # BUNCH project images
│   │   ├── bunch-2.png
│   │   ├── uism-1~5.png         # UISM content images
│   │   ├── artmosphere-1.png    # Artmosphere images
│   │   └── artmosphere-2.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/               # Reusable components
│   │   │   ├── text/            # Text effect components
│   │   │   │   ├── ShinyText/   # Shiny text animation
│   │   │   │   └── BlurText/    # Blur reveal animation
│   │   │   ├── PhotoFrame.jsx   # Photo frame component
│   │   │   └── PhotoFrame.css
│   │   ├── CurvedLoop/          # Curved text animation
│   │   ├── ExperienceModal/     # Experience detail modals
│   │   │   ├── ExperienceModal.jsx
│   │   │   ├── ExperienceFullscreen.jsx
│   │   │   ├── ExperienceSlideOut.jsx
│   │   │   └── ExperienceBottomDrawer.jsx
│   │   ├── layout/              # Layout components
│   │   │   ├── PillNav.jsx      # Animated navigation
│   │   │   ├── Footer.jsx       # Footer dengan waves
│   │   │   └── FooterWaves.css
│   │   ├── ProfileCard/         # 3D profile card
│   │   │   ├── ProfileCard.jsx
│   │   │   └── ProfileCard.css
│   │   └── sections/            # Page sections
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── ExperienceSection.jsx
│   │       ├── PortfolioSection.jsx
│   │       ├── CertSection.jsx
│   │       └── ContactSection.jsx
│   ├── constants/               # Configuration & data
│   │   ├── index.js            # COLORS, SOCIAL_LINKS, NAVIGATION_ITEMS
│   │   └── data.js             # portfolioProjects, experiences, certificates
│   ├── hooks/                   # Custom React hooks
│   │   ├── useIntersectionObserver.js
│   │   └── useAdvancedInteractions.js
│   ├── utils/                   # Helper functions
│   │   └── helpers.js          # formatDate, truncateText, scrollToSection, etc.
│   ├── App.jsx                  # Main app component
│   ├── index.css               # Global styles & Tailwind
│   └── main.jsx                # Entry point
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js              # Vite config (base: /)
```

## 🎨 Customization

### Color Scheme
Portfolio menggunakan pink aesthetic palette yang dapat disesuaikan di `src/constants/index.js`:
```javascript
export const COLORS = {
  primary: '#F5AFAF',        // Coral pink
  primaryLight: '#F9DFDF',   // Light pink
  primaryLighter: '#FBEFEF', // Lighter pink
  primaryDark: '#7C2D2D',    // Dark brown
  primaryDarker: '#8B3A3A',  // Darker brown
  white: '#FFFFFF',
  background: '#FCF8F8',
};
```

### Content Updates

1. **Personal Information & Links**
   ```javascript
   // src/constants/index.js
   export const SOCIAL_LINKS = {
     instagram: 'https://instagram.com/nawraadn',
     linkedin: 'https://linkedin.com/in/nawradanisha',
     email: 'mailto:nawradanisha@gmail.com',
   };
   ```

2. **Portfolio Projects**
   ```javascript
   // src/constants/data.js
   export const portfolioProjects = [
     {
       id: 1,
       title: "Project Title",
       category: "Category",
       description: "Description...",
       images: ["./assets/image.png"],
       links: [{ url: "...", label: "..." }]
     }
   ];
   ```

3. **Experiences**
   ```javascript
   // src/constants/data.js
   export const experiences = [
     {
       id: 1,
       role: "Role Title",
       organization: "Organization Name",
       year: "2025",
       category: "Category",
       description: "Description...",
       skills: ["Skill 1", "Skill 2"],
       impact: "Impact statement"
     }
   ];
   ```

4. **Certificates**
   ```javascript
   // src/constants/data.js
   export const certificates = [
     {
       id: 1,
       title: "Certificate Name",
       link: "https://drive.google.com/...",
       organization: "Issuer",
       year: "2025",
       description: "Description...",
       skills: ["Skill 1", "Skill 2"],
       color: "brown",
       iconName: "FaAward",
       certificateImage: "./assets/cert.jpg",
     }
   ];
   ```

5. **Navigation Items**
   ```javascript
   // src/constants/index.js
   export const NAVIGATION_ITEMS = [
     { href: '#home', label: 'Home' },
     { href: '#about', label: 'About Me' },
     // ... add more items
   ];
   ```

6. **Images**: Replace files di `public/assets/`
   - Profile: `profile.jpg`
   - Certificates: `certificate-01.jpg`, `certificate-02.jpg`
   - Portfolio: `bunch-*.png`, `uism-*.png`, `artmosphere-*.png`

## 📱 Responsive Design

Website fully responsive dengan mobile-first approach:
- **Mobile**: < 640px (sm)
  - Vertical button layout
  - Single column grids
  - Compact spacing
  - Hamburger menu
- **Tablet**: 640px - 1024px (sm to lg)
  - 2-column grids
  - Medium spacing
  - Responsive text sizes
- **Desktop**: > 1024px (lg+)
  - Multi-column layouts
  - Full navigation bar
  - Larger text and spacing
  - Hover effects

## 🔧 Build & Deployment

### Development
```bash
npm run dev          # Start dev server at localhost:5173
npm run lint         # Run ESLint
```

### Production
```bash
npm run build        # Create production build in dist/
npm run preview      # Preview production build
```

### Deployment Notes
- Base URL configured as `/` in `vite.config.js` (root path untuk Vercel/Netlify)
- Static assets served from `public/assets/`
- Build output optimized for performance
- Untuk GitHub Pages: ubah base ke `/<repo-name>/` di vite.config.js

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (not supported)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Untuk pertanyaan atau support:
- **Email**: nawradanisha@gmail.com
- **Instagram**: [@nawraadn](https://instagram.com/nawraadn)
- **LinkedIn**: [Nawra Danisha](https://linkedin.com/in/nawradanisha)

---

**Made with ❤️ by Nawra Danisha - Psychology Student 
