import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text-box glass">
          <span className="hero-subtitle">Welcome to Excellence</span>
          <h1 className="h1 hero-title">Shaping the Future at 中華科技大学</h1>
          <p className="hero-description">
            Discover a world-class education focused on technology, innovation, and global leadership. 
            Join our diverse community of thinkers and creators.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Explore Programs <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="btn btn-secondary">Virtual Tour</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
