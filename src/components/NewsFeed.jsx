import { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Newspaper } from 'lucide-react';
import './NewsFeed.css';

const initialNews = [
  {
    id: 1,
    title: "University Announces New AI Research Center",
    date: "2026-08-01",
    category: "Research",
    excerpt: "A $50M state-of-the-art artificial intelligence research facility will be opening on campus next fall.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Student Team Wins Global Robotics Competition",
    date: "2026-07-28",
    category: "Student Life",
    excerpt: "The engineering student team took first place at the International Robotics Championship in Tokyo.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Fall Semester Orientation Schedule Released",
    date: "2026-07-25",
    category: "Academics",
    excerpt: "Welcome week activities and orientation schedules are now available for incoming freshmen.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const NewsFeed = () => {
  const [news, setNews] = useState(initialNews);
  const [isAdding, setIsAdding] = useState(false);

  // Simulate dynamically fetching or updating news
  useEffect(() => {
    const timer = setTimeout(() => {
      setNews(prev => [{
        id: 4,
        title: "Latest: Grant Awarded for Sustainable Energy Study",
        date: new Date().toISOString().split('T')[0],
        category: "Research",
        excerpt: "The National Science Foundation has awarded our faculty a major grant for renewable energy solutions.",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }, ...prev]);
      setIsAdding(true);
      setTimeout(() => setIsAdding(false), 1000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <div className="news-header">
          <div>
            <span className="section-subtitle">Stay Updated</span>
            <h2 className="h2 section-title">Latest Campus News</h2>
          </div>
          <button className="btn btn-primary btn-outline">
            View All News <Newspaper size={18} className="ml-2" />
          </button>
        </div>

        <div className="news-grid">
          {news.slice(0, 3).map((item, index) => (
            <article 
              key={item.id} 
              className={`news-card ${isAdding && index === 0 ? 'highlight-new' : ''}`}
            >
              <div className="news-image-wrapper">
                <img src={item.image} alt={item.title} className="news-image" />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="h3 news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="read-more">
                  Read Full Story <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
