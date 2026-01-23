import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ShinyText from "../common/text/ShinyText/ShinyText";
import BlurText from "../common/text/BlurText/BlurText";
import { SOCIAL_LINKS } from "../../constants";
import CurvedLoop from "../CurvedLoop/CurvedLoop";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        className="hero relative min-h-screen h-auto py-20 md:py-0 md:h-screen flex items-center justify-center section-offset overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-4 blur-3xl float-animation"
            style={{ 
              backgroundColor: '#F9DFDF'
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-3 blur-2xl float-animation-reverse"
            style={{ 
              backgroundColor: '#F5AFAF'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            }`}>
              
              <div 
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 glass-card bg-[#F9DFDF]"
                style={{
                  border: '1px solid #F5AFAF'
                }}
              >
                <img
                  src="./assets/profile.jpg"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"
                  alt="Profile"
                />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }}></div>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: '#7C2D2D' }}>
                    Psychology for a better tomorrow
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: "#7C2D2D" }}>
                  Hi! I'm{" "}
                  <span style={{ color: "#F5AFAF" }}>
                    Nawra
                  </span>
                </h1>
                
                <div className="space-y-4">
                  
                  <BlurText
                    text="Currently focused on social media branding, creative content writing, and building a more inclusive future through psychological understanding."
                    delay={600}
                    animateBy="words"
                    direction="top"
                    className="text-base md:text-lg leading-relaxed text-gray-600 text-justify"
                  />
                </div>
              </div>

              <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 transition-all duration-1000 delay-900 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}>
                <button
                  className="group relative glass-card px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-2xl overflow-hidden transition-all duration-300 hover-lift focus-ring bg-[#F5AFAF] w-full sm:w-auto"
                  style={{ 
                    color: '#FFFFFF'
                  }}
                >
                  <ShinyText
                    text="Download CV"
                    disabled={false}
                    speed={3}
                    className="relative z-10 font-semibold text-sm sm:text-base"
                  />
                </button>

                <a
                  href="#portfolio"
                  className="group glass-card px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-2xl font-semibold transition-all duration-300 hover-lift focus-ring bg-white text-sm sm:text-base w-full sm:w-auto text-center"
                  style={{ 
                    border: '2px solid #F9DFDF',
                    color: '#F5AFAF'
                  }}
                >
                  <ShinyText
                    text="Explore Portfolio"
                    disabled={false}
                    speed={3}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </a>
              </div>

            </div>

            <div className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-10"
            }`}>
              <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
                <ProfileCard
                  name="Nawra Danisha"
                  title="Psychology Student"
                  status="instagram"
                  handle="nawraadn"
                  contactText="Klik Me"
                  avatarUrl="./assets/profile.jpg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() =>
                    window.open(SOCIAL_LINKS.instagram, "_blank")
                  }
                />
              </div>
            </div>
          </div>

          <div className={`mt-8 sm:mt-12 transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}>
            <div className="relative">
              <CurvedLoop
                marqueeText="Welcome to My Portfolio ✦ Psychology ✦ Research ✦ Mental Health ✦ Innovation ✦ "
                speed={1.2}
                curveAmount={0}
                direction="left"
                interactive={true}
                className="relative opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;