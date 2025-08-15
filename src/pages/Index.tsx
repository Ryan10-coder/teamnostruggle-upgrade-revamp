import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Membership from '@/components/Membership';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Membership />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
