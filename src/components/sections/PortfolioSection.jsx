import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { portfolioProjects } from "../../constants/data";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

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
      className="py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto"
      id="portfolio"
    >
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#F9DFDF] border border-[#F5AFAF] shadow-sm mb-6 sm:mb-8">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#F5AFAF] animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#F5AFAF] animate-ping opacity-30"></div>
          </div>
          <span className="text-sm font-semibold text-[#7C2D2D]">
            Featured Work
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
          <span className="text-[#7C2D2D]">My </span>
          <span className="text-[#F5AFAF] relative">
            Portfolio
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F5AFAF] rounded-full opacity-30"></div>
          </span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-[#7C2D2D] max-w-3xl mx-auto leading-relaxed px-4">
          A collection of my writing, content creation, and creative projects
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {portfolioProjects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden border-2 border-[#F9DFDF]">
              
              <div className="bg-[#FBEFEF] px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b-2 border-[#F9DFDF]">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                      <span className="inline-block px-3 sm:px-4 py-1.5 bg-[#F5AFAF] text-white rounded-full text-xs font-bold shadow-md">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white rounded-full shadow-md border border-[#F9DFDF]">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5AFAF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs sm:text-sm font-bold text-[#7C2D2D]">{project.images.length}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#7C2D2D] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#7C2D2D] leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid lg:grid-cols-[1fr,300px] gap-8">
                  
                  <div>
                    <h4 className="text-sm font-bold text-[#F5AFAF] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-1 h-4 bg-[#F5AFAF] rounded-full"></div>
                      Preview Gallery
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative group/img overflow-hidden rounded-xl bg-[#FBEFEF] shadow-md hover:shadow-xl transition-all duration-300 border border-[#F9DFDF]"
                          style={{ aspectRatio: '4/3' }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} - ${imgIndex + 1}`}
                            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover/img:opacity-60 transition-opacity duration-300 flex items-end justify-center pb-3">
                            <span className="text-white text-xs font-semibold">Image {imgIndex + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#F5AFAF] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-1 h-4 bg-[#F5AFAF] rounded-full"></div>
                      View Content
                    </h4>
                    <div className="space-y-3">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-5 py-3.5 bg-white hover:bg-[#F5AFAF] text-[#F5AFAF] hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg group/link border border-[#F9DFDF] hover:border-transparent"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F9DFDF] group-hover/link:bg-white/20 transition-colors">
                            <span className="text-sm font-bold text-[#F5AFAF] group-hover/link:text-white">{linkIndex + 1}</span>
                          </div>
                          <span className="flex-1 text-sm">{link.label}</span>
                          <FaExternalLinkAlt className="text-xs opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
