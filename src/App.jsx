import Header from './components/Header';
import Hero from './components/Hero';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsFeed />
      </main>
      <Footer />
    </>
  );
}

export default App;
