import React, { useEffect, useRef, useState } from "react";
import PhotoFrame from "../common/PhotoFrame";
import { COLORS } from "../../constants/index";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto w-full max-w-7xl relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-20"
      id="about"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ backgroundColor: COLORS.background }}>
      </div>

      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      }`}>
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-sm mb-8" style={{ backgroundColor: COLORS.primaryLight, borderColor: COLORS.primary, borderWidth: '1px' }}>
          <div className="relative">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.primary }}></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-30" style={{ backgroundColor: COLORS.primary }}></div>
          </div>
          <span className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>
            About Me
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span style={{ color: COLORS.primaryDark }}>Get to Know </span>
          <span className="relative" style={{ color: COLORS.primary }}>
            Me Better
            <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-30" style={{ backgroundColor: COLORS.primary }}></div>
          </span>
        </h2>
        
        <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: COLORS.primaryDark }}>
          Discover my journey, passion, and what drives me forward
        </p>
      </div>

      <div className={`grid lg:grid-cols-12 gap-6 lg:items-stretch transition-all duration-1000 delay-300 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      }`}>
        
        <div className="lg:col-span-4 relative group flex">
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mx-auto w-full h-full flex flex-col" style={{ backgroundColor: COLORS.primaryLighter, borderColor: COLORS.primaryLight, borderWidth: '1px', maxWidth: '360px' }}>
            <div className="flex-1 relative overflow-hidden flex items-center justify-center py-6">
              <PhotoFrame />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex">
          
          <div className="rounded-[2rem] p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group w-full h-full flex flex-col justify-center" style={{ backgroundColor: COLORS.primaryLighter, borderColor: COLORS.primaryLight, borderWidth: '1px' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: COLORS.primaryLight }}></div>
            
            <h3 className="text-2xl font-bold mb-5" style={{ color: COLORS.primary }}>
              My Journey
            </h3>
            <p className="leading-relaxed relative z-10 mb-4" style={{ color: COLORS.primaryDark, textAlign: "justify" }}>
              I'm a psychology undergraduate with strong interests in education, advocacy, and organizational development. 
              I thrive in collaborative and inclusive environments where everyone is heard, valued, and supported to reach 
              their potential.
            </p>
            <p className="leading-relaxed relative z-10 mb-4" style={{ color: COLORS.primaryDark, textAlign: "justify" }}>
              As a psychology student, I'm passionate about learning, teaching, and creating meaningful impact through 
              social initiatives. My academic interests focus on education, mental health, and human resources development. 
              I believe that empowered and well-developed human resources are the key to improving performance and sustaining 
              organizational success.
            </p>
            <p className="leading-relaxed relative z-10" style={{ color: COLORS.primaryDark, textAlign: "justify" }}>
              However, my focus is not only on institutional growth, but also on the benefits experienced by individuals 
              within the organization and the broader community it serves. I am continuously eager to deepen my understanding 
              of human behavior particularly executive functioning, motivation, and learning processes as part of my long-term 
              goal of becoming a psychologist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
