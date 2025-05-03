import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const sections = [
        'home',
        'features',
        'how-it-works',
        'pricing',
        'testimonials',
        'contact',
        'faq'
      ];

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar_container">
        <div className="nav_logo">
          <h1>Padipay</h1>
        </div>
        <div className="menu_icon" onClick={toggleMenu}>
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
        <div className={`nav_items ${menuOpen ? 'active' : ''}`}>
          <ul>
            {[
              { label: 'Home', id: 'home' },
              { label: 'Features', id: 'features' },
              { label: 'How It Works', id: 'howItWorks' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Contact', id: 'contact' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <li
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
              >
                <a href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(item.id);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  setMenuOpen(false); // close mobile menu after click
                }}
                >{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav_btn">
          <button className="download_btn">Download App</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
