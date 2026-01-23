import { useState, useEffect, useRef } from "react";
import ShinyText from "../common/text/ShinyText/ShinyText";
import BlurText from "../common/text/BlurText/BlurText";

const ExperienceBottomDrawer = ({ isOpen, onClose, experience }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setDragY(0);
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
      setActiveTab("overview");
    }, 300);
  };

  // Touch/Mouse drag handlers
  const handleStart = (clientY) => {
    setIsDragging(true);
    setStartY(clientY);
  };

  const handleMove = (clientY) => {
    if (!isDragging) return;
    const deltaY = clientY - startY;
    if (deltaY > 0) {
      // Only allow dragging down
      setDragY(deltaY);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Close if dragged down more than 150px
    if (dragY > 150) {
      handleClose();
    } else {
      setDragY(0);
    }
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e) => {
    handleStart(e.clientY);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Add mouse move and up listeners when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startY]);

  if (!isOpen) return null;

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "activities", label: "Activities", icon: "⚡" },
    { id: "skills", label: "Skills", icon: "🎯" },
    { id: "impact", label: "Impact", icon: "📈" },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Bottom Drawer */}
      <div
        ref={drawerRef}
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transform transition-all duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          height: "75vh",
          maxHeight: "600px",
          minHeight: "400px",
          transform: `translateY(${isAnimating ? dragY : "100%"}px)`,
        }}
      >
        {/* Drag Handle */}
        <div
          className="flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="px-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${experience.color}15`,
                  border: `2px solid ${experience.color}30`,
                }}
              >
                {experience.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {experience.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {experience.organization}
                </p>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-xs text-gray-500">
                    {experience.period}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      experience.status === "ongoing"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {experience.status === "ongoing"
                      ? "🟢 Active"
                      : "✅ Completed"}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 text-gray-600"
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

        {/* Tab Navigation - Mobile Optimized */}
        <div className="px-6 mb-4">
          <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-1 text-sm ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span className="text-sm">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
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
                  About
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {experience.description}
                </p>
              </div>

              {experience.metrics && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(experience.metrics)
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-gray-50 rounded-2xl p-4 text-center"
                        >
                          <div
                            className="text-2xl font-bold mb-1"
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
                          <div className="text-sm text-gray-600 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === "activities" && experience.activities && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
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
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-2xl"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: experience.color }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed flex-1">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && experience.skills && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
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
                    className="px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300"
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

          {/* Impact Tab */}
          {activeTab === "impact" && experience.impact && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-lg">
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
                <p className="text-gray-700 leading-relaxed italic text-base">
                  "{experience.impact}"
                </p>
              </div>

              {/* Additional Info in Impact Tab */}
              {(experience.teamSize ||
                experience.difficulty ||
                experience.location) && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Additional Information
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {experience.teamSize && (
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {experience.teamSize}
                        </div>
                        <div className="text-xs text-gray-600">Team</div>
                      </div>
                    )}
                    {experience.difficulty && (
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="flex justify-center space-x-1 mb-1">
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
                        <div className="text-xs text-gray-600">Level</div>
                      </div>
                    )}
                    {experience.location && (
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <div className="text-lg">📍</div>
                        <div className="text-xs text-gray-600">
                          {experience.location}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="border-t border-gray-100 p-4 bg-white">
          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-2xl font-medium transition-colors duration-300 flex items-center justify-center text-base"
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Close
            </button>
            <button
              className="flex-1 px-6 py-4 text-white rounded-2xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center text-base"
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
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBottomDrawer;
