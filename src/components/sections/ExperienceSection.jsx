import React, { useState } from "react";
import { 
  FaInstagram, FaEdit, FaUsers, FaPen, 
  FaBullseye, FaTheaterMasks, FaRocket, FaChalkboardTeacher, 
  FaMoneyBillWave, FaVenus, FaHandsHelping, FaBook, FaGraduationCap,
  FaBriefcase, FaLightbulb
} from "react-icons/fa";
import { experiences } from "../../constants/data";

const ExperienceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Social Media", "Corporate Skill", "Advocational aspect"];

  // Unified color scheme with pink palette - NO GRADIENTS
  const cardColors = {
    bg: "bg-[#FBEFEF]",
    border: "border-[#F9DFDF]",
    text: "text-[#7C2D2D]",
    badge: "bg-[#F9DFDF] text-[#8B3A3A]",
    icon: "text-[#F5AFAF]"
  };

  const getIcon = (id) => {
    const icons = {
      1: <FaInstagram />,
      2: <FaEdit />,
      3: <FaUsers />,
      4: <FaPen />,
      5: <FaBullseye />,
      6: <FaTheaterMasks />,
      7: <FaRocket />,
      8: <FaChalkboardTeacher />,
      9: <FaMoneyBillWave />,
      10: <FaVenus />,
      11: <FaHandsHelping />,
      12: <FaBook />,
      13: <FaGraduationCap />
    };
    return icons[id] || <FaRocket />;
  };

  const experiences = [
    {
      id: 1,
      role: "Social Media Branding Staff",
      organization: "Psikologi untuk Negeri",
      year: "2025",
      category: "Social Media",
      description: "Created promotional content for volunteering programs that focused on delivering equal educational opportunities for elementary school students.",
      skills: ["Video editing", "Creative video production", "Brand strategy", "Visual storytelling"],
      impact: "Equal education opportunities"
    },
    {
      id: 2,
      role: "Content Creator Staff", 
      organization: "UI Sehat Mental (UISM)",
      year: "2025",
      category: "Social Media",
      description: "Produced creative campaigns and educational content on mental health awareness for the student community. Collaborated in planning digital initiatives to foster psychological well-being and inclusivity.",
      skills: ["Copywriting", "Translating research findings", "Storytelling", "Audience engagement"],
      impact: "Student mental wellness"
    },
    {
      id: 3,
      role: "BPH Content Creator",
      organization: "BEM Faculty of Psychology UI",
      year: "2026", 
      category: "Social Media",
      description: "Led content creation initiatives across divisions, managing team collaboration and editorial planning to ensure consistent and engaging communication.",
      skills: ["Team management", "Cross-division collaboration", "Content planning", "Editorial coordination"],
      impact: "Cohesive organizational communication"
    },
    {
      id: 4,
      role: "BUNCH Writer",
      organization: "BEM Faculty of Psychology UI",
      year: "2025", 
      category: "Social Media",
      description: "Wrote and developed feature articles on psychology and social issues, ensuring content quality through research-based storytelling and alignment with organizational goals.",
      skills: ["Copywriting", "Feature writing", "Storytelling", "Research-based writing"],
      impact: "Quality psychology content"
    },
    {
      id: 5,
      role: "BA Coordinator",
      organization: "Growthify", 
      year: "2025",
      category: "Corporate Skill",
      description: "Coordinated the Campus Ambassador program, managed recruitment and mentoring, and expanded Growthify's outreach through partnerships.",
      skills: ["Business assistance coordination", "Communication management", "Partnership handling", "Administrative organization"],
      impact: "Campus network expansion"
    },
    {
      id: 6,
      role: "Talent Manager",
      organization: "Psymphony",
      year: "2025",
      category: "Corporate Skill",
      description: "Managed talents, schedules, and trackers to ensure smooth coordination of performances and events.",
      skills: ["Talent coordination", "Interpersonal communication", "Scheduling", "Performance monitoring"],
      impact: "Seamless event operations"
    },
    {
      id: 7,
      role: "Project Management Staff",
      organization: "U-Shape",
      year: "2025",
      category: "Corporate Skill",
      description: "Led projects on facilitation, empowerment, and community building; coordinated teams and oversaw timelines.",
      skills: ["Project planning", "Timeline management", "Internal coordination", "Execution monitoring"],
      impact: "Community empowerment"
    },
    {
      id: 8,
      role: "Vice Project Officer of Training and Development",
      organization: "U-Shape",
      year: "2026",
      category: "Corporate Skill",
      description: "Managed facilitators and developed learning modules for training programs.",
      skills: ["Managing facilitators", "Developing learning modules", "Public speaking", "Training coordination", "Evaluation of learning outcomes"],
      impact: "Enhanced training quality"
    },
    {
      id: 9,
      role: "Head of Treasurer",
      organization: "Entrepreneur Day",
      year: "2025",
      category: "Corporate Skill",
      description: "Managed budget planning and financial reporting for entrepreneurial events.",
      skills: ["Budget planning", "Financial reporting", "Fund allocation", "Financial accountability"],
      impact: "Sound financial management"
    },
    {
      id: 10,
      role: "Member",
      organization: "Girl Up UI",
      year: "2025",
      category: "Advocational aspect",
      description: "Contributed to advocacy campaigns on gender equality and youth leadership through events and content creation.",
      skills: ["Advocacy awareness", "Teamwork", "Gender and social issues discussions"],
      impact: "Gender equality awareness"
    },
    {
      id: 11,
      role: "Head of Human Resources Development",
      organization: "Girl Up UI",
      year: "2025–2026",
      category: "Advocational aspect",
      description: "Led human resource development initiatives to build member capacity and design internal training programs.",
      skills: ["HR development planning", "Member capacity building", "Internal training design", "Performance evaluation"],
      impact: "Empowered member development"
    },
    {
      id: 12,
      role: "Event Staff",
      organization: "Bhineka Literacy",
      year: "2025–2026",
      category: "Advocational aspect",
      description: "Supported educational programs and coordinated literacy events for community engagement.",
      skills: ["Event coordination", "Educational program support", "Teamwork", "Community engagement"],
      impact: "Community literacy promotion"
    },
    {
      id: 13,
      role: "Deputy of Learning Module",
      organization: "Garda Biru Muda",
      year: "2025",
      category: "Advocational aspect",
      description: "Managed learning modules and coordinated educational materials for civic awareness programs.",
      skills: ["Learning module management", "External communication", "Assessment coordination", "Material development", "Case study design"],
      impact: "Comprehensive civic education"
    }
  ];

  const filteredExperiences = selectedCategory === "All" 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="experience">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F9DFDF] border border-[#F5AFAF] shadow-sm mb-8">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#F5AFAF] animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#F5AFAF] animate-ping opacity-30"></div>
          </div>
          <span className="text-sm font-semibold text-[#7C2D2D]">
            Professional Journey
          </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-[#7C2D2D]">My </span>
          <span className="text-[#F5AFAF] relative">
            Experience
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F5AFAF] rounded-full opacity-30"></div>
          </span>
        </h2>
        
        <p className="text-xl text-[#7C2D2D] max-w-3xl mx-auto leading-relaxed">
          Crafting impactful solutions through diverse roles in psychology, content creation, and organizational development
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm
              ${selectedCategory === category
                ? 'bg-[#F5AFAF] text-white shadow-lg scale-105'
                : 'bg-white text-[#F5AFAF] border border-[#F9DFDF] hover:border-[#F5AFAF] hover:text-[#8B3A3A] hover:shadow-md'
              }
            `}
          >
            {category}
            <span className="ml-2 text-xs opacity-70">
              ({category === "All" ? experiences.length : experiences.filter(exp => exp.category === category).length})
            </span>
          </button>
        ))}
      </div>

      {/* Grid View */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredExperiences.map((exp) => {
          return (
            <div
              key={exp.id}
              className={`${cardColors.bg} border-2 ${cardColors.border} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105`}
            >
              {/* Icon & Year */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-[#F5AFAF] flex items-center justify-center text-white text-xl shadow-lg`}>
                  {getIcon(exp.id)}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${cardColors.badge}`}>
                  {exp.year}
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold ${cardColors.text} mb-1`}>
                {exp.role}
              </h3>
              <p className="text-[#F5AFAF] font-semibold text-sm mb-4">
                {exp.organization}
              </p>

              {/* All Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 ${cardColors.badge} rounded-full text-xs font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div className={`flex items-center gap-2 text-xs font-semibold ${cardColors.text} pt-3 border-t ${cardColors.border}`}>
                <div className={`w-2 h-2 rounded-full bg-[#F5AFAF]`}></div>
                <span>{exp.impact}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Summary */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-[#FBEFEF] border-2 border-[#F9DFDF] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#F5AFAF] flex items-center justify-center text-white text-xl shadow-lg">
              <FaEdit />
            </div>
          </div>
          <div className="text-4xl font-bold text-[#7C2D2D] mb-2">
            {experiences.filter(e => e.category === "Social Media").length}
          </div>
          <div className="text-sm font-semibold text-[#8B3A3A]">Social Media</div>
        </div>
        <div className="bg-[#FBEFEF] border-2 border-[#F9DFDF] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#F5AFAF] flex items-center justify-center text-white text-xl shadow-lg">
              <FaBriefcase />
            </div>
          </div>
          <div className="text-4xl font-bold text-[#7C2D2D] mb-2">
            {experiences.filter(e => e.category === "Corporate Skill").length}
          </div>
          <div className="text-sm font-semibold text-[#8B3A3A]">Corporate</div>
        </div>
        <div className="bg-[#FBEFEF] border-2 border-[#F9DFDF] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#F5AFAF] flex items-center justify-center text-white text-xl shadow-lg">
              <FaHandsHelping />
            </div>
          </div>
          <div className="text-4xl font-bold text-[#7C2D2D] mb-2">
            {experiences.filter(e => e.category === "Advocational aspect").length}
          </div>
          <div className="text-sm font-semibold text-[#8B3A3A]">Advocacy</div>
        </div>
        <div className="bg-[#FBEFEF] border-2 border-[#F9DFDF] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#F5AFAF] flex items-center justify-center text-white text-xl shadow-lg">
              <FaLightbulb />
            </div>
          </div>
          <div className="text-4xl font-bold text-[#7C2D2D] mb-2">
            {experiences.reduce((acc, exp) => acc + exp.skills.length, 0)}
          </div>
          <div className="text-sm font-semibold text-[#8B3A3A]">Total Skills</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 
