import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import MissionVision from './sections/MissionVision';
import Programs from './sections/Programs';
import Community from './sections/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark">
      <main className="min-h-screen bg-[#09172C] text-[#F8F5EF]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Navbar />
        </div>

        <Hero />
        <About />
        <MissionVision />
        <Programs />
        <Community />
        <Footer />
      </main>
    </div>
  );
}

export default App;
