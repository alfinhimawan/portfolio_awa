import { useState, useEffect } from "react";
import ShinyText from "../common/text/ShinyText/ShinyText";
import BlurText from "../common/text/BlurText/BlurText";

const ExperienceModal = ({ isOpen, onClose, experience }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !experience) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/95 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-br from-zinc-900/95 via-zinc-800/95 to-zinc-900/95 backdrop-blur-xl border border-violet-400/30 rounded-3xl shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-600 rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <span className="text-white text-xl">×</span>
          </button>

          {/* Header Image */}
          {/* Image Header */}
          <div className="relative h-80 overflow-hidden rounded-t-3xl">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent" />

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                <ShinyText
                  text={experience.title}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </h2>
              <p className="text-violet-300 text-lg font-medium">
                {experience.period}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Organization */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Organization
              </h3>
              <p className="text-gray-300">{experience.organization}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Description
              </h3>
              <BlurText
                text={experience.description}
                delay={50}
                className="text-gray-300 leading-relaxed"
              />
            </div>

            {/* Activities */}
            {experience.activities && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Activities
                </h3>
                <ul className="space-y-3">
                  {experience.activities.map((activity, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-violet-400 mt-1">•</span>
                      <span className="text-gray-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {experience.skills && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Skills Developed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm border border-violet-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            {experience.impact && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Impact & Results
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {experience.impact}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
