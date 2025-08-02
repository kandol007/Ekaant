import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="font-sans bg-white">
      <Navbar />
      <Hero />
      <Features />
      <FAQs />
      <Footer />
    </main>
  );
}