import { useState, useEffect, useRef } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'samples', label: 'Samples' }
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

  useEffect(() => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 bg-stone-50 z-50 pl-8 pr-10 pt-8 pb-6">
      <div className="flex flex-row-reverse">
          <div ref={navRef} className="flex gap-8 relative">
            {sections.map((section) => (
              <button
                key={section.id}
                ref={(el) => {
                    if(el !== null) {
                        linkRefs.current[section.id] = el
                    }
                }}
                onClick={() => scrollToSection(section.id)}
                className={`transition-colors relative pb-1 cursor-pointer ${
                  activeSection === section.id ? 'text-stone-900' : 'text-stone-700 hover:text-stone-900'
                }`}
                style={section.id === 'samples' ? { } : {}}
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