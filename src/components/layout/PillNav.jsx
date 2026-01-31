import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiHome, FiUser, FiBriefcase, FiFolder, FiAward, FiMail } from "react-icons/fi";

const iconMap = {
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiAward,
  FiMail,
};

const PillNav = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#6366F1", // Deep Blue
  pillColor = "#FFFFFF", // White
  hoveredPillTextColor = "#FFFFFF", // White
  hoveredPillBgColor = "#A5B4FC", // Lavender Blue
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if ((document).fonts?.ready) {
      (document).fonts.ready.then(layout).catch(() => { });
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation && !hasAnimated) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease,
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, {
          width: "auto",
          duration: 0.6,
          ease,
        });
      }

      setHasAnimated(true);
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation, hasAnimated]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (newState) {
        // Transform to X
        gsap.to(lines[0], { rotation: 45, y: 7, duration: 0.3, ease });
        gsap.to(lines[1], { opacity: 0, duration: 0.2, ease });
        gsap.to(lines[2], { rotation: -45, y: -7, duration: 0.3, ease });
      } else {
        // Transform back to hamburger
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { opacity: 1, duration: 0.2, ease });
        gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: "top center",
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = (href) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--hover-bg"]: hoveredPillBgColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--logo"]: "36px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px",
  };

  return (
    <div className="fixed top-0 md:top-[1em] z-[1000] w-full left-0 md:w-auto md:left-1/2 md:-translate-x-1/2">
      <nav
        className={`w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 py-3 md:px-0 md:py-0 backdrop-blur-md shadow-md md:shadow-lg rounded-none md:rounded-full ${className}`}
        aria-label="Primary"
        style={{
          ...cssVars,
          background: 'rgba(255, 255, 255, 0.95)',
          borderBottom: '1px solid rgba(245, 175, 175, 0.2)',
          ...(window.innerWidth >= 768 && {
            border: '2px solid rgba(245, 175, 175, 0.3)',
            borderBottom: '2px solid rgba(245, 175, 175, 0.3)',
            boxShadow: '0 8px 32px rgba(245, 175, 175, 0.15), 0 4px 12px rgba(249, 223, 223, 0.1)'
          })
        }}
      >
        {/* Logo - Different for mobile and desktop */}
        <div className="flex items-center">
          {/* Mobile: Tilted photo with brand text */}
          <a
            href="#home"
            className="md:hidden flex items-center gap-3"
          >
            <div 
              className="relative"
              style={{
                transform: 'rotate(-3deg)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(-3deg)';
              }}
            >
              <img
                src={logo}
                alt={logoAlt}
                className="w-10 h-10 object-cover"
                style={{
                  borderRadius: '8px',
                  border: '2px solid #F5AFAF',
                  boxShadow: '0 2px 8px rgba(245, 175, 175, 0.3)'
                }}
              />
            </div>
            <span 
              className="font-extrabold text-[17px] tracking-tight"
              style={{ 
                background: 'linear-gradient(135deg, #F5AFAF 0%, #7C2D2D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                letterSpacing: '-0.8px'
              }}
            >
              KnowYouNaw
            </span>
          </a>
          
          {/* Desktop: Tilted photo with border radius */}
          <a
            href="#home"
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={(el) => {
              logoRef.current = el;
            }}
            className="hidden md:inline-flex items-center justify-center"
          >
            <div
              className="relative"
              style={{
                transform: 'rotate(-4deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <img
                src={logo}
                alt={logoAlt}
                ref={logoImgRef}
                className="w-[42px] h-[42px] object-cover"
                style={{
                  borderRadius: '10px',
                  border: '2.5px solid #F5AFAF',
                  boxShadow: '0 4px 12px rgba(245, 175, 175, 0.35)'
                }}
              />
            </div>
          </a>
        </div>

        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: "var(--nav-h)",
            background: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle = {
                background: isActive ? "#F5AFAF" : "rgba(255, 255, 255, 0.9)",
                color: isActive ? "#fff" : "#7C2D2D",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
                boxShadow: isActive ? "0 4px 12px rgba(245, 175, 175, 0.3)" : "none",
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: "#F5AFAF",
                      willChange: "transform",
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: "var(--hover-text, #fff)",
                        willChange: "transform, opacity",
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                </>
              );

              const basePillClasses =
                "relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0";

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    className={basePillClasses}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {PillContent}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden flex flex-col items-center justify-center gap-[5px] cursor-pointer p-2 border-0 bg-transparent"
          style={{
            width: "36px",
            height: "36px",
          }}
        >
          <span
            className="hamburger-line w-5 h-[2px] rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: "#7C2D2D" }}
          />
          <span
            className="hamburger-line w-5 h-[2px] rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: "#7C2D2D" }}
          />
          <span
            className="hamburger-line w-5 h-[2px] rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: "#7C2D2D" }}
          />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[60px] left-0 right-0 rounded-none z-[998] origin-top backdrop-blur-md"
        style={{
          ...cssVars,
          background: "rgba(255, 255, 255, 0.98)",
          borderBottom: '2px solid rgba(245, 175, 175, 0.2)',
          boxShadow: '0 8px 24px rgba(245, 175, 175, 0.15)'
        }}
      >
        <ul className="list-none m-0 p-4 flex flex-col gap-0">
          {items.map((item) => {
            const defaultStyle = {
              background: "transparent",
              color: "#7C2D2D",
              borderBottom: "1px solid rgba(245, 175, 175, 0.1)"
            };
            const hoverIn = (e) => {
              e.currentTarget.style.background = "rgba(245, 175, 175, 0.1)";
              e.currentTarget.style.color = "#7C2D2D";
            };
            const hoverOut = (e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#7C2D2D";
            };

            const handleClick = (e) => {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              // Close menu after navigation
              setTimeout(() => {
                setIsMobileMenuOpen(false);
                toggleMobileMenu();
              }, 100);
            };

            const linkClasses =
              "flex items-center gap-3 py-4 px-3 text-[15px] font-medium transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]";

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={linkClasses}
                  style={defaultStyle}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  onClick={handleClick}
                >
                  {item.icon && iconMap[item.icon] && (
                    <span className="text-lg" style={{ color: '#F5AFAF' }}>{iconMap[item.icon]({ size: 20 })}</span>
                  )}
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
