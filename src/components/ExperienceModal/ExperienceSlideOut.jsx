import { useState, useEffect } from "react";
import ShinyText from "../common/text/ShinyText/ShinyText";
import BlurText from "../common/text/BlurText/BlurText";

const ExperienceSlideOut = ({ isOpen, onClose, experience }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!experience) return null;

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Slide Panel */}
      <div
        className={`ml-auto w-full max-w-2xl bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Gradient */}
        <div
          className="relative h-64 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${
              experience.color || "#4F46E5"
            }, ${experience.color || "#4F46E5"}CC)`,
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6 text-white"
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

          {/* Floating Icon */}
          <div className="absolute top-6 left-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl">
              {experience.icon}
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-6 left-28">
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                experience.status === "ongoing"
                  ? "bg-green-500/20 text-green-100 border border-green-400/30"
                  : "bg-gray-500/20 text-gray-100 border border-gray-400/30"
              }`}
            >
              {experience.status === "ongoing" ? "🟢 Active" : "✅ Completed"}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-8 left-6 right-6">
            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
              {experience.title}
            </h2>
            <p className="text-white/80 text-lg">{experience.organization}</p>
            <p className="text-white/60 text-sm mt-1">{experience.period}</p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>

        {/* Content Area */}
        <div className="h-[calc(100vh-16rem)] overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Quick Stats */}
            {experience.metrics && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(experience.metrics)
                  .slice(0, 4)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-50 rounded-2xl p-4 text-center"
                    >
                      <div
                        className="text-2xl font-bold"
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
                      <div className="text-sm text-gray-600 capitalize mt-1">
                        {key}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  style={{ color: experience.color }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                About This Experience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Key Activities */}
            {experience.activities && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: experience.color }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Key Activities
                </h3>
                <div className="space-y-3">
                  {experience.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: experience.color }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Developed */}
            {experience.skills && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: experience.color }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        backgroundColor: `${experience.color}15`,
                        color: experience.color,
                        border: `2px solid ${experience.color}30`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Impact & Results */}
            {experience.impact && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    style={{ color: experience.color }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"
                    />
                  </svg>
                  Impact & Results
                </h3>
                <div
                  className="p-6 rounded-2xl border-l-4"
                  style={{
                    backgroundColor: `${experience.color}08`,
                    borderLeftColor: experience.color,
                  }}
                >
                  <p className="text-gray-700 leading-relaxed italic">
                    "{experience.impact}"
                  </p>
                </div>
              </div>
            )}

            {/* Additional Info */}
            {(experience.teamSize ||
              experience.difficulty ||
              experience.location) && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {experience.teamSize && (
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {experience.teamSize}
                      </div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                  )}
                  {experience.difficulty && (
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="flex justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < experience.difficulty
                                ? "bg-orange-400"
                                : "bg-gray-300"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">Complexity</div>
                    </div>
                  )}
                  {experience.location && (
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-lg font-bold text-gray-900">📍</div>
                      <div className="text-sm text-gray-600">
                        {experience.location}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-gray-200">
              <button
                onClick={handleClose}
                className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Close
              </button>
              <button
                className="flex-1 px-6 py-3 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{ backgroundColor: experience.color }}
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Share Experience
              </button>
            </div>

            {/* Bottom Spacing */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlideOut;
