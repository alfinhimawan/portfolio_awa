import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { portfolioProjects } from "../../constants/data";
import { COLORS } from "../../constants";

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
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm mb-6 sm:mb-8" style={{ backgroundColor: COLORS.primaryLight, borderWidth: '1px', borderStyle: 'solid', borderColor: COLORS.primary }}>
          <div className="relative">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.primary }}></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-30" style={{ backgroundColor: COLORS.primary }}></div>
          </div>
          <span className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>
            Featured Work
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
          <span style={{ color: COLORS.primaryDark }}>My </span>
          <span className="relative" style={{ color: COLORS.primary }}>
            Portfolio
            <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-30" style={{ backgroundColor: COLORS.primary }}></div>
          </span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4" style={{ color: COLORS.primaryDark }}>
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
            <div className="rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden" style={{ backgroundColor: COLORS.white, borderWidth: '2px', borderStyle: 'solid', borderColor: COLORS.primaryLight }}>
              
              <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6" style={{ backgroundColor: COLORS.primaryLighter, borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: COLORS.primaryLight }}>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                      <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold shadow-md" style={{ backgroundColor: COLORS.primary, color: COLORS.white }}>
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full shadow-md" style={{ backgroundColor: COLORS.white, borderWidth: '1px', borderStyle: 'solid', borderColor: COLORS.primaryLight }}>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs sm:text-sm font-bold" style={{ color: COLORS.primaryDark }}>{project.images.length}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: COLORS.primaryDark }}>
                      {project.title}
                    </h3>
                    <p className="leading-relaxed text-sm md:text-base" style={{ color: COLORS.primaryDark }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid lg:grid-cols-[1fr,300px] gap-8">
                  
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: COLORS.primary }}>
                      <div className="w-1 h-4 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
                      Preview Gallery
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative group/img overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                          style={{ aspectRatio: '4/3', backgroundColor: COLORS.primaryLighter, borderWidth: '1px', borderStyle: 'solid', borderColor: COLORS.primaryLight }}
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
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: COLORS.primary }}>
                      <div className="w-1 h-4 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
                      View Content
                    </h4>
                    <div className="space-y-3">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg group/link"
                          style={{ backgroundColor: COLORS.white, color: COLORS.primary, borderWidth: '1px', borderStyle: 'solid', borderColor: COLORS.primaryLight }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.primary;
                            e.currentTarget.style.color = COLORS.white;
                            e.currentTarget.style.borderColor = 'transparent';
                            const iconBg = e.currentTarget.querySelector('.icon-bg');
                            const iconNum = e.currentTarget.querySelector('.icon-num');
                            if (iconBg) iconBg.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                            if (iconNum) iconNum.style.color = COLORS.white;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.white;
                            e.currentTarget.style.color = COLORS.primary;
                            e.currentTarget.style.borderColor = COLORS.primaryLight;
                            const iconBg = e.currentTarget.querySelector('.icon-bg');
                            const iconNum = e.currentTarget.querySelector('.icon-num');
                            if (iconBg) iconBg.style.backgroundColor = COLORS.primaryLight;
                            if (iconNum) iconNum.style.color = COLORS.primary;
                          }}
                        >
                          <div className="icon-bg flex items-center justify-center w-8 h-8 rounded-lg transition-colors" style={{ backgroundColor: COLORS.primaryLight }}>
                            <span className="icon-num text-sm font-bold" style={{ color: COLORS.primary }}>{linkIndex + 1}</span>
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
