import { useState, useEffect } from "react";
import ShinyText from "../common/text/ShinyText/ShinyText";
import BlurText from "../common/text/BlurText/BlurText";

const ExperienceFullscreen = ({ isOpen, onClose, experience }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSection, setCurrentSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "activities", label: "Activities", icon: "⚡" },
    { id: "skills", label: "Skills", icon: "🎯" },
    { id: "impact", label: "Impact", icon: "📈" },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
      // Smooth entrance animation
      setTimeout(() => setCurrentSection("overview"), 500);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case "Escape":
          handleClose();
          break;
        case "1":
          setCurrentSection("overview");
          break;
        case "2":
          setCurrentSection("activities");
          break;
        case "3":
          setCurrentSection("skills");
          break;
        case "4":
          setCurrentSection("impact");
          break;
        case "ArrowLeft":
          e.preventDefault();
          const currentIndex = sections.findIndex(
            (s) => s.id === currentSection
          );
          if (currentIndex > 0) {
            setCurrentSection(sections[currentIndex - 1].id);
          }
          break;
        case "ArrowRight":
          e.preventDefault();
          const nextIndex = sections.findIndex((s) => s.id === currentSection);
          if (nextIndex < sections.length - 1) {
            setCurrentSection(sections[nextIndex + 1].id);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, currentSection]);

  if (!experience) return null;

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSection("overview");
      onClose();
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-all duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at center, ${
              experience.color || "#4F46E5"
            }40 0%, ${experience.color || "#4F46E5"}20 40%, transparent 70%), 
                        linear-gradient(135deg, #000000 0%, #1a1a1a 100%)`,
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse"
            style={{ backgroundColor: experience.color }}
          ></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-pulse"
            style={{ backgroundColor: experience.color, animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 safe-area-inset-top">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl backdrop-blur-sm border border-white/20 flex-shrink-0"
                style={{ backgroundColor: `${experience.color}20` }}
              >
                {experience.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                  {experience.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm truncate">
                  {experience.organization}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Keyboard Shortcuts Indicator */}
              <div className="hidden lg:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-2 py-1.5 border border-white/20">
                <div className="text-white/60 text-xs">Navigation:</div>
                <div className="flex items-center space-x-1 text-white/80 text-xs">
                  <kbd className="px-1 py-0.5 bg-white/20 rounded text-xs">
                    ←→
                  </kbd>
                  <kbd className="px-1 py-0.5 bg-white/20 rounded text-xs">
                    1-4
                  </kbd>
                  <kbd className="px-1 py-0.5 bg-white/20 rounded text-xs">
                    ESC
                  </kbd>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="absolute inset-0 flex flex-col pt-20 sm:pt-24 pb-4 sm:pb-8 overflow-y-auto">
          <div className="flex-1 flex flex-col justify-center max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Hero Content */}
            <div className="text-center mb-8 sm:mb-12">
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  <ShinyText
                    text={experience.title}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight"
                  />
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-6 sm:mb-8">
                  <div className="text-center">
                    <div
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: experience.color }}
                    >
                      {experience.period?.split(" - ")[0] || "2024"}
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm">
                      Start Year
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-8 sm:h-12 bg-white/20"></div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {experience.status === "ongoing"
                        ? "∞"
                        : experience.period?.split(" - ")[1] || "Present"}
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm">
                      {experience.status === "ongoing" ? "Ongoing" : "End"}
                    </div>
                  </div>

                  {experience.teamSize && (
                    <>
                      <div className="hidden sm:block w-px h-8 sm:h-12 bg-white/20"></div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white">
                          {experience.teamSize}
                        </div>
                        <div className="text-white/60 text-xs sm:text-sm">
                          Team Size
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                  {experience.description}
                </p>
              </div>
            </div>

            {/* Section Navigation with Progress */}
            <div
              className={`flex flex-col items-center mb-6 sm:mb-12 transform transition-all duration-1000 delay-500 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Progress Bar */}
              <div className="w-48 sm:w-64 h-1 bg-white/20 rounded-full mb-4 sm:mb-6 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${
                      ((sections.findIndex((s) => s.id === currentSection) +
                        1) /
                        sections.length) *
                      100
                    }%`,
                  }}
                ></div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 mx-4">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-1 sm:space-x-2 relative text-sm sm:text-base ${
                      currentSection === section.id
                        ? "bg-white text-black shadow-lg scale-105"
                        : "text-white hover:bg-white/10 hover:scale-102"
                    }`}
                  >
                    <span className="text-sm sm:text-base">{section.icon}</span>
                    <span className="whitespace-nowrap">{section.label}</span>
                    {/* Keyboard shortcut indicator */}
                    <span className="hidden md:inline text-xs opacity-60 ml-1">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Sections */}
            <div
              className={`flex-1 flex flex-col justify-center transform transition-all duration-700 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              {/* Overview Section */}
              {currentSection === "overview" && (
                <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full px-4">
                  {experience.metrics && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      {Object.entries(experience.metrics)
                        .slice(0, 4)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                          >
                            <div
                              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                              style={{ color: experience.color }}
                            >
                              {typeof value === "number" && value > 1000
                                ? `${(value / 1000).toFixed(1)}k`
                                : value}
                              {key.includes("satisfaction") ||
                              key.includes("safety") ||
                              key.includes("recovery")
                                ? "%"
                                : key.includes("reach") ||
                                  key.includes("participants")
                                ? "+"
                                : ""}
                            </div>
                            <div className="text-white/60 capitalize text-xs sm:text-sm">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  <div className="text-center">
                    <div
                      className={`inline-flex px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold ${
                        experience.status === "ongoing"
                          ? "bg-green-500/20 text-green-300 border-2 border-green-400/30"
                          : "bg-blue-500/20 text-blue-300 border-2 border-blue-400/30"
                      }`}
                    >
                      {experience.status === "ongoing"
                        ? "🟢 Currently Active"
                        : "✅ Successfully Completed"}
                    </div>
                  </div>
                </div>
              )}

              {/* Activities Section */}
              {currentSection === "activities" && experience.activities && (
                <div className="max-w-4xl mx-auto w-full px-4">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {experience.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0"
                            style={{ backgroundColor: experience.color }}
                          >
                            {index + 1}
                          </div>
                          <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                            {activity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {currentSection === "skills" && experience.skills && (
                <div className="max-w-4xl mx-auto text-center w-full px-4">
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {experience.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="group px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer hover:scale-110"
                      >
                        <span className="text-white font-medium group-hover:scale-110 transition-transform duration-300 inline-block text-sm sm:text-base">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact Section */}
              {currentSection === "impact" && experience.impact && (
                <div className="max-w-4xl mx-auto text-center w-full px-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 hover:bg-white/8 transition-all duration-500">
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 opacity-60"
                      style={{ color: experience.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <blockquote className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed italic mb-4 sm:mb-6">
                      "{experience.impact}"
                    </blockquote>
                    <div className="text-white/60 text-sm sm:text-base">
                      — Impact Statement
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex-shrink-0 p-4 sm:p-6 lg:p-8 safe-area-inset-bottom">
          <div className="flex justify-center max-w-md mx-auto">
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-white flex items-center justify-center space-x-2 text-sm sm:text-base"
              style={{ backgroundColor: experience.color }}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              <span>Share This Experience</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFullscreen;
