import Navbar from '../navbar';
import FaqSection from './faq-section';
import Footer from './footer';
import Hero from './hero';
import TrainigSection from './trainig-section';

const Home = () => {
  return (
    <div className="flex flex-col w-screen overflow-y-hidden overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrainigSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
