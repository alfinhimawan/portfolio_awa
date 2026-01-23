import React, { useState } from "react";
import {
  useIntersectionObserver,
  useStaggeredAnimation,
} from "../../hooks/useIntersectionObserver";
import { FaCertificate, FaAward } from "react-icons/fa";
import { certificates } from "../../constants/data";

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
        bg: "bg-[#FBEFEF]",
        border: "border-[#F9DFDF] hover:border-[#F5AFAF]",
        text: "text-[#7C2D2D]",
        textLight: "text-[#8B3A3A]",
        iconBg: "bg-[#F9DFDF]",
        skillBg: "bg-[#F9DFDF] border-[#F9DFDF] text-[#7C2D2D]",
      },
      violet: {
        bg: "bg-[#FBEFEF]",
        border: "border-[#F9DFDF] hover:border-[#F5AFAF]",
        text: "text-[#7C2D2D]",
        textLight: "text-[#8B3A3A]",
        iconBg: "bg-[#F9DFDF]",
        skillBg: "bg-[#F9DFDF] border-[#F9DFDF] text-[#7C2D2D]",
      },
      blue: {
        bg: "bg-[#FBEFEF]",
        border: "border-[#F9DFDF] hover:border-[#F5AFAF]",
        text: "text-[#7C2D2D]",
        textLight: "text-[#8B3A3A]",
        iconBg: "bg-[#F9DFDF]",
        skillBg: "bg-[#F9DFDF] border-[#F9DFDF] text-[#7C2D2D]",
      },
      emerald: {
        bg: "bg-[#FBEFEF]",
        border: "border-[#F9DFDF] hover:border-[#F5AFAF]",
        text: "text-[#7C2D2D]",
        textLight: "text-[#8B3A3A]",
        iconBg: "bg-[#F9DFDF]",
        skillBg: "bg-[#F9DFDF] border-[#F9DFDF] text-[#7C2D2D]",
      },
      amber: {
        bg: "bg-[#FBEFEF]",
        border: "border-[#F9DFDF] hover:border-[#F5AFAF]",
        text: "text-[#7C2D2D]",
        textLight: "text-[#8B3A3A]",
        iconBg: "bg-[#F9DFDF]",
        skillBg: "bg-[#F9DFDF] border-[#F9DFDF] text-[#7C2D2D]",
      },
      pink: {
        bg: "bg-[#FBEFEF]",
        border: "border-[#F9DFDF] hover:border-[#F5AFAF]",
        text: "text-[#7C2D2D]",
        textLight: "text-[#8B3A3A]",
        iconBg: "bg-[#F9DFDF]",
        skillBg: "bg-[#F9DFDF] border-[#F9DFDF] text-[#7C2D2D]",
      },
      indigo: {
        bg: "bg-[#FBEFEF]",
        border: "border-[#F9DFDF] hover:border-[#F5AFAF]",
        text: "text-[#7C2D2D]",
        textLight: "text-[#8B3A3A]",
        iconBg: "bg-[#F9DFDF]",
        skillBg: "bg-[#F9DFDF] border-[#F9DFDF] text-[#7C2D2D]",
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
        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F9DFDF] border border-[#F5AFAF] shadow-sm mb-8 transition-all duration-1000 ${
          titleAnimation.isIntersecting
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}>
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#F5AFAF] animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#F5AFAF] animate-ping opacity-30"></div>
          </div>
          <span className="text-sm font-semibold text-[#7C2D2D]">
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
          <span className="text-[#7C2D2D]">Certificates & </span>
          <span className="text-[#F5AFAF] relative">
            Training
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F5AFAF] rounded-full opacity-30"></div>
          </span>
        </h1>

        <p
          className={`text-xl text-[#7C2D2D] max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            titleAnimation.isIntersecting
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
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
                className={`group relative ${colors.bg} backdrop-blur-md border ${colors.border} rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl max-w-md w-full ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={cert.certificateImage}
                    alt={`Certificate of ${cert.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-80"></div>

                  <div
                    className={`absolute top-4 left-4 w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20`}
                  >
                    {React.createElement(getIcon(cert.iconName), { className: "text-2xl text-[#F5AFAF]" })}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 bg-white backdrop-blur-sm">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-[#F5AFAF] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group/link"
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
          className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
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

              <div className="absolute bottom-0 left-0 right-0 bg-[#7C2D2D]/80 p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold text-center">
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
