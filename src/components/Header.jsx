import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <GraduationCap size={32} className="logo-icon" />
          <h1 className="logo-text">中華科技大学</h1>
        </div>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#academics" className="nav-link">Academics</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#admissions" className="nav-link">Admissions</a>
          <a href="#research" className="nav-link">Research</a>
          <button className="btn btn-primary ml-auto">Apply Now</button>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
