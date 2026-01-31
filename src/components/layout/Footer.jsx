import React, { useState, useEffect } from "react";
import { FiMail, FiLinkedin, FiInstagram, FiHeart, FiArrowUp } from "react-icons/fi";
import { SOCIAL_LINKS, COLORS } from "../../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: FiMail, 
      label: "Email", 
      href: SOCIAL_LINKS.email,
      color: "#6366F1"
    },
    { 
      icon: FiLinkedin, 
      label: "LinkedIn", 
      href: SOCIAL_LINKS.linkedin,
      color: "#0077B5"
    },
    { 
      icon: FiInstagram, 
      label: "Instagram", 
      href: SOCIAL_LINKS.instagram,
      color: "#E4405F"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-6 sm:bottom-8 sm:right-8 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ backgroundColor: COLORS.primary }}
        title="Back to top"
      >
        <FiArrowUp className="w-6 h-6" style={{ color: COLORS.white }} />
      </button>

      <footer className="relative py-12 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]" style={{ backgroundColor: COLORS.primaryLighter, borderTop: `1px solid ${COLORS.primaryLight}` }}>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-8 md:justify-items-start">
          
          <div className="md:justify-self-start">
            <h2 className="text-2xl font-bold mb-2" style={{ color: COLORS.primary }}>
              <span>Nawra</span> Danisha
            </h2>
            <p className="text-sm" style={{ color: COLORS.primaryDark }}>
              Psychology undergraduate passionate about mental health and social advocacy
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-semibold mb-4" style={{ color: COLORS.primaryDark }}>Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Experience", "Portfolio", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm transition-colors duration-200 hover:scale-105"
                  style={{ color: COLORS.primaryDarker }}
                  onMouseEnter={(e) => e.target.style.color = COLORS.primary}
                  onMouseLeave={(e) => e.target.style.color = COLORS.primaryDarker}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-semibold mb-4" style={{ color: COLORS.primaryDark }}>Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: COLORS.white }}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" style={{ color: social.color }} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm" style={{ color: COLORS.primaryDark }}>{SOCIAL_LINKS.email.replace('mailto:', '')}</p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-center gap-4" style={{ borderColor: COLORS.primaryLight }}>
          <p className="text-sm flex items-center gap-2" style={{ color: COLORS.primaryDark }}>
            © {currentYear} Nawra Danisha • Made with <FiHeart className="w-4 h-4 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;