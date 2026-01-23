import React from "react";
import { FiMail, FiLinkedin, FiInstagram, FiHeart, FiArrowUp } from "react-icons/fi";
import { SOCIAL_LINKS } from "../../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="relative bg-[#FBEFEF] border-t border-[#F9DFDF] py-12 w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-8 md:justify-items-start">
          
          <div className="md:justify-self-start">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "#F5AFAF" }}>
              <span style={{ color: "#F5AFAF" }}>Nawra</span> Danisha
            </h2>
            <p className="text-[#7C2D2D] text-sm">
              Psychology undergraduate passionate about mental health and social advocacy
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-semibold text-[#7C2D2D] mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Experience", "Portfolio", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="block text-[#8B3A3A] hover:text-[#F5AFAF] text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-semibold text-[#7C2D2D] mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" style={{ color: social.color }} />
                  </a>
                );
              })}
            </div>
            <p className="text-[#7C2D2D] text-sm">{SOCIAL_LINKS.email.replace('mailto:', '')}</p>
          </div>
        </div>

        <div className="border-t border-[#F9DFDF] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7C2D2D] text-sm flex items-center gap-2">
            © {currentYear} Nawra Danisha • Made with <FiHeart className="w-4 h-4 text-red-500" />
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-white rounded-lg hover:scale-110 transition-all duration-300 shadow-sm"
            style={{ color: "#F5AFAF" }}
            title="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;