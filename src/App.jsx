import { useRef, useState, useEffect } from "react";
import PillNav from "./components/layout/PillNav";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from './components/sections/ExperienceSection';
import PortfolioSection from "./components/sections/PortfolioSection";
import CertSection from "./components/sections/CertSection";
import ContactSection from "./components/sections/ContactSection";
import { NAVIGATION_ITEMS, COLORS } from "./constants";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      if (section.id) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) {
          sectionObserver.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <PillNav
        logo="./assets/profile.jpg"
        logoAlt="Nawra Danisha"
        items={NAVIGATION_ITEMS}
        activeHref={activeSection}
        baseColor={COLORS.primary}
        pillColor={COLORS.primaryLighter}
        hoveredPillBgColor={COLORS.primary}
        hoveredPillTextColor={COLORS.white}
        pillTextColor="#7C2D2D"
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar-offset bg-transparent">
        
        <HeroSection />

        <AboutSection />

        <ExperienceSection />

        <PortfolioSection />

        <CertSection />

        <ContactSection />
        
      </main>
      
      <Footer />
    </>
  )
}

export default App
