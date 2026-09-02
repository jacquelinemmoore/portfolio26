"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'samples', label: 'Portfolio' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check sections from bottom to top to find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateUnderlinePosition = useCallback(() => {
    const activeLink = linkRefs.current[activeSection];
    const nav = navRef.current;
    
    if (activeLink && nav) {
      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setUnderlineStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width
      });
    }
  }, [activeSection]);

  useEffect(() => {
    updateUnderlinePosition();
  }, [activeSection, updateUnderlinePosition]);

  // Handle window resize to update underline position with debounce
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        updateUnderlinePosition();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [updateUnderlinePosition]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element && containerRef.current) {
      const navHeight = containerRef.current.offsetHeight || 80;
      const offset = navHeight + 12;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  }, []);

  const handleRefCallback = useCallback((section: string) => {
    return (el: HTMLButtonElement | null) => {
      if (el !== null) {
        linkRefs.current[section] = el;
      }
    };
  }, []);

  return (
    <nav ref={containerRef} className="fixed top-0 right-0 left-0 bg-stone-50 z-50 pl-8 pr-10 pt-8 pb-6">
      <div className="flex flex-row-reverse">
          <div ref={navRef} className="flex gap-6 md:gap-8 relative">
            {sections.map((section) => (
              <button
                key={section.id}
                ref={handleRefCallback(section.id)}
                onClick={() => scrollToSection(section.id)}
                className={`transition-colors relative pb-2 md:pb-1 cursor-pointer text-sm md:text-base py-2 md:py-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 ${
                  activeSection === section.id ? 'text-stone-900' : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                {section.label}
              </button>
            ))}
            <span
              className="absolute bottom-0 h-[1px] bg-stone-900 transition-all duration-300 ease-in-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`
              }}
            />
          </div>
      </div>
    </nav>
  );
}
