import React, { useState } from "react";
import {
  useIntersectionObserver,
  useStaggeredAnimation,
} from "../../hooks/useIntersectionObserver";
import { FaCertificate, FaAward } from "react-icons/fa";
import { certificates } from "../../constants/data";
import { COLORS } from "../../constants";

const CertSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const titleAnimation = useIntersectionObserver({ threshold: 0.2 });
  const { ref: cardsRef, visibleItems } = useStaggeredAnimation(certificates.length, 150);

  const getIcon = (iconName) => {
    const icons = {
      'FaAward': FaAward,
      'FaCertificate': FaCertificate
    };
    return icons[iconName] || FaAward;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      brown: {
        bg: COLORS.primaryLighter,
        border: COLORS.primaryLight,
        borderHover: COLORS.primary,
        text: COLORS.primaryDark,
        textLight: COLORS.primaryDarker,
        iconBg: COLORS.primaryLight,
        skillBg: COLORS.primaryLight,
        skillBorder: COLORS.primaryLight,
        skillText: COLORS.primaryDark,
      },
      violet: {
        bg: COLORS.primaryLighter,
        border: COLORS.primaryLight,
        borderHover: COLORS.primary,
        text: COLORS.primaryDark,
        textLight: COLORS.primaryDarker,
        iconBg: COLORS.primaryLight,
        skillBg: COLORS.primaryLight,
        skillBorder: COLORS.primaryLight,
        skillText: COLORS.primaryDark,
      },
      blue: {
        bg: COLORS.primaryLighter,
        border: COLORS.primaryLight,
        borderHover: COLORS.primary,
        text: COLORS.primaryDark,
        textLight: COLORS.primaryDarker,
        iconBg: COLORS.primaryLight,
        skillBg: COLORS.primaryLight,
        skillBorder: COLORS.primaryLight,
        skillText: COLORS.primaryDark,
      },
      emerald: {
        bg: COLORS.primaryLighter,
        border: COLORS.primaryLight,
        borderHover: COLORS.primary,
        text: COLORS.primaryDark,
        textLight: COLORS.primaryDarker,
        iconBg: COLORS.primaryLight,
        skillBg: COLORS.primaryLight,
        skillBorder: COLORS.primaryLight,
        skillText: COLORS.primaryDark,
      },
      amber: {
        bg: COLORS.primaryLighter,
        border: COLORS.primaryLight,
        borderHover: COLORS.primary,
        text: COLORS.primaryDark,
        textLight: COLORS.primaryDarker,
        iconBg: COLORS.primaryLight,
        skillBg: COLORS.primaryLight,
        skillBorder: COLORS.primaryLight,
        skillText: COLORS.primaryDark,
      },
      pink: {
        bg: COLORS.primaryLighter,
        border: COLORS.primaryLight,
        borderHover: COLORS.primary,
        text: COLORS.primaryDark,
        textLight: COLORS.primaryDarker,
        iconBg: COLORS.primaryLight,
        skillBg: COLORS.primaryLight,
        skillBorder: COLORS.primaryLight,
        skillText: COLORS.primaryDark,
      },
      indigo: {
        bg: COLORS.primaryLighter,
        border: COLORS.primaryLight,
        borderHover: COLORS.primary,
        text: COLORS.primaryDark,
        textLight: COLORS.primaryDarker,
        iconBg: COLORS.primaryLight,
        skillBg: COLORS.primaryLight,
        skillBorder: COLORS.primaryLight,
        skillText: COLORS.primaryDark,
      },
    };
    return colorMap[color] || colorMap.brown;
  };

  const openPreview = (imageUrl, title) => {
    setPreviewImage({ url: imageUrl, title: title });
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div
      className="certificate relative py-16 md:py-20 px-4 sm:px-6"
      id="certificate"
      style={{ color: "#1565C0" }}
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(224, 247, 255, 0.2)" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: "rgba(167, 243, 208, 0.2)" }}
        ></div>
      </div>

      <div className="text-center mb-20" ref={titleAnimation.ref}>
        <div 
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border shadow-sm mb-8 transition-all duration-1000 ${
            titleAnimation.isIntersecting
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
          style={{ backgroundColor: COLORS.primaryLight, borderColor: COLORS.primary }}
        >
          <div className="relative">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.primary }}></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-30" style={{ backgroundColor: COLORS.primary }}></div>
          </div>
          <span className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>
            Certifications
          </span>
        </div>

        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            titleAnimation.isIntersecting
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <span style={{ color: COLORS.primaryDark }}>Certificates & </span>
          <span className="relative" style={{ color: COLORS.primary }}>
            Training
            <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-30" style={{ backgroundColor: COLORS.primary }}></div>
          </span>
        </h1>

        <p
          className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            titleAnimation.isIntersecting
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
          style={{ color: COLORS.primaryDark }}
        >
          Professional certifications and specialized training in psychology and mental health
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div
          className="flex flex-wrap justify-center gap-y-8 gap-x-4"
          ref={cardsRef}
        >
          {certificates.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={cert.id}
                className={`group relative backdrop-blur-md border rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl max-w-md w-full ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }`}
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.border,
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.borderHover}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = colors.border}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={cert.certificateImage}
                    alt={`Certificate of ${cert.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-80"></div>

                  <div
                    className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                    style={{ backgroundColor: colors.iconBg }}
                  >
                    {React.createElement(getIcon(cert.iconName), { className: "text-2xl", style: { color: COLORS.primary } })}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.white }}>
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 backdrop-blur-sm" style={{ backgroundColor: COLORS.white }}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group/link"
                    style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                  >
                    <span>View Certificate</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: COLORS.white }}
            >
              <svg
                className="w-6 h-6"
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

            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={previewImage.url}
                alt={`Certificate of ${previewImage.title}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 rounded-b-lg" style={{ backgroundColor: `${COLORS.primaryDark}CC` }}>
                <h3 className="text-xl font-bold text-center" style={{ color: COLORS.white }}>
                  Certificate of {previewImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertSection;
