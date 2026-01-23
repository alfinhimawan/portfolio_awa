import React, { useEffect, useRef, useState } from "react";
import PhotoFrame from "../common/PhotoFrame";

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
      className="mx-auto w-full max-w-7xl relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      id="about"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#FCF8F8]">
      </div>

      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      }`}>
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F9DFDF] border border-[#F5AFAF] shadow-sm mb-8">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#F5AFAF] animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#F5AFAF] animate-ping opacity-30"></div>
          </div>
          <span className="text-sm font-semibold text-[#7C2D2D]">
            About Me
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-[#7C2D2D]">Get to Know </span>
          <span className="text-[#F5AFAF] relative">
            Me Better
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F5AFAF] rounded-full opacity-30"></div>
          </span>
        </h2>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Discover my journey, passion, and what drives me forward
        </p>
      </div>

      <div className={`grid lg:grid-cols-12 gap-6 lg:items-stretch transition-all duration-1000 delay-300 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      }`}>
        
        <div className="lg:col-span-4 relative group flex">
          <div className="relative bg-[#FBEFEF] rounded-[2rem] overflow-hidden border border-[#F9DFDF] shadow-xl hover:shadow-2xl transition-all duration-500 max-w-sm mx-auto w-full h-full flex flex-col">
            <div className="flex-1 relative overflow-hidden">
              <PhotoFrame />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex">
          
          <div className="bg-[#FBEFEF] rounded-[2rem] p-8 lg:p-10 border border-[#F9DFDF] shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group w-full h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9DFDF] rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold mb-5" style={{ color: "#F5AFAF" }}>
              My Journey
            </h3>
            <p className="text-[#7C2D2D] leading-relaxed relative z-10 mb-4" style={{ textAlign: "justify" }}>
              I'm a psychology undergraduate with strong interests in education, advocacy, and organizational development. 
              I thrive in collaborative and inclusive environments where everyone is heard, valued, and supported to reach 
              their potential.
            </p>
            <p className="text-[#7C2D2D] leading-relaxed relative z-10 mb-4" style={{ textAlign: "justify" }}>
              As a psychology student, I'm passionate about learning, teaching, and creating meaningful impact through 
              social initiatives. My academic interests focus on education, mental health, and human resources development. 
              I believe that empowered and well-developed human resources are the key to improving performance and sustaining 
              organizational success.
            </p>
            <p className="text-[#7C2D2D] leading-relaxed relative z-10" style={{ textAlign: "justify" }}>
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
