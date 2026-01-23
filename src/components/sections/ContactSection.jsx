import React, { useEffect, useRef, useState } from "react";
import ShinyText from "../common/text/ShinyText/ShinyText";
import BlurText from "../common/text/BlurText/BlurText";
import { SOCIAL_LINKS } from "../../constants";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiCopy,
  FiExternalLink,
  FiSend,
  FiCheck,
  FiMessageCircle,
  FiUser,
  FiHeart,
} from "react-icons/fi";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL_LINKS.email.replace('mailto:', ''));
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
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

  const contactMethods = [
    {
      icon: FiMail,
      title: "Email",
      value: SOCIAL_LINKS.email.replace('mailto:', ''),
      description: "Send me a message anytime",
      action: copyEmail,
      actionText: copiedEmail ? "Copied!" : "Copy Email",
      color: "#F9DFDF"
    },
    {
      icon: FiInstagram,
      title: "Instagram",
      value: "@nawraadn",
      description: "Connect with me on social",
      action: () => window.open(SOCIAL_LINKS.instagram, "_blank"),
      actionText: "Follow",
      color: "#F5AFAF"
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      value: "Nawra Danisha",
      description: "Professional networking",
      action: () => window.open(SOCIAL_LINKS.linkedin, "_blank"),
      actionText: "Connect",
      color: "#F9DFDF"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Jakarta, Indonesia",
      description: "GMT+7 Timezone",
      actionText: "View Map",
      color: "#F5AFAF"
    }
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen py-12 md:py-20 px-4 md:px-6 section-offset overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-4 blur-3xl float-animation"
          style={{ 
            backgroundColor: '#F9DFDF'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-3 blur-2xl float-animation-reverse"
          style={{ 
            backgroundColor: '#F5AFAF'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#F9DFDF] border border-[#F5AFAF] shadow-sm mb-4 md:mb-6 lg:mb-8">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#F5AFAF] animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#F5AFAF] animate-ping opacity-30"></div>
            </div>
            <span className="text-sm font-semibold text-[#7C2D2D]">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-[#7C2D2D]">Let's </span>
            <span className="text-[#F5AFAF] relative">
              Connect
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F5AFAF] rounded-full opacity-30"></div>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#7C2D2D] max-w-3xl mx-auto leading-relaxed px-2">
            Have a project or collaboration idea? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-10"
          }`}>
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: "#F5AFAF" }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#7C2D2D] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl glass-card focus-ring transition-all duration-300 bg-[#FBEFEF]"
                    style={{
                      border: '1px solid #F9DFDF'
                    }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#7C2D2D] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl glass-card focus-ring transition-all duration-300 bg-[#FBEFEF]"
                    style={{
                      border: '1px solid #F9DFDF'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#7C2D2D] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl glass-card focus-ring transition-all duration-300 bg-[#FBEFEF]"
                    style={{
                      border: '1px solid #F9DFDF'
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#7C2D2D] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl glass-card focus-ring transition-all duration-300 resize-none bg-[#FBEFEF]"
                    style={{
                      border: '1px solid #F9DFDF'
                    }}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-3 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover-lift focus-ring disabled:opacity-50 flex items-center justify-center gap-2 md:gap-3"
                  style={{
                    backgroundColor: formStatus === 'sent' 
                      ? '#10B981'
                      : '#F5AFAF',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(245, 175, 175, 0.3)'
                  }}
                >
                  {formStatus === 'sending' && (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  {formStatus === 'sent' && <FiCheck className="w-5 h-5" />}
                  {formStatus === 'idle' && <FiSend className="w-5 h-5" />}
                  <span>
                    {formStatus === 'sending' && 'Sending...'}
                    {formStatus === 'sent' && 'Message Sent!'}
                    {formStatus === 'idle' && 'Send Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-10"
          }`}>
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: "#F5AFAF" }}>
                Connect With Me
              </h3>

              <div className="space-y-4">
                <div
                  className="glass-card p-3 md:p-4 rounded-lg md:rounded-xl cursor-pointer hover-lift transition-all duration-300 bg-[#FBEFEF]"
                  onClick={copyEmail}
                  style={{
                    border: '1px solid #F9DFDF'
                  }}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-white bg-[#F9DFDF]">
                      <FiMail className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#F5AFAF' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm md:text-base text-[#7C2D2D]">Email</p>
                      <p className="text-xs md:text-sm text-[#8B3A3A] truncate">{SOCIAL_LINKS.email.replace('mailto:', '')}</p>
                    </div>
                    <div className="text-xs font-medium" style={{ color: '#F5AFAF' }}>
                      {copiedEmail ? 'Copied!' : 'Copy'}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {[
                    { icon: FiInstagram, label: "Instagram", url: SOCIAL_LINKS.instagram, color: "#E4405F" },
                    { icon: FiLinkedin, label: "LinkedIn", url: SOCIAL_LINKS.linkedin, color: "#0077B5" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 md:p-4 rounded-lg md:rounded-xl glass-card hover-lift transition-all duration-300 bg-[#FBEFEF]"
                        style={{
                          border: '1px solid #F9DFDF'
                        }}
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                          style={{ backgroundColor: social.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-[#7C2D2D]">{social.label}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Info */}
                <div className="mt-6 md:mt-8 p-3 md:p-4 rounded-lg md:rounded-xl bg-[#F9DFDF]">
                  <div className="flex items-start gap-3">
                    <FiMapPin className="w-4 h-4 md:w-5 md:h-5 mt-1" style={{ color: '#F5AFAF' }} />
                    <div>
                      <p className="font-semibold text-sm md:text-base text-[#7C2D2D] mb-1">Location</p>
                      <p className="text-xs md:text-sm text-[#8B3A3A]">Jakarta, Indonesia (GMT+7)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;