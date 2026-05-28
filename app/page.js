import Hero from '@/components/Hero';
import Story from '@/components/Story';
import ProcessTimeline from '@/components/ProcessTimeline';
import BeeEducation from '@/components/BeeEducation';
import Products from '@/components/Products';
import BeeLife from '@/components/BeeLife';
import ApiarioMap from '@/components/ApiarioMap';
import Testimonials from '@/components/Testimonials';
import InstagramFeed from '@/components/InstagramFeed';
import PaymentMethods from '@/components/PaymentMethods';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a href="#productos" className="skip-link" aria-label="Saltar al contenido principal">Saltar al contenido</a>

      <Hero />

      <main>
        <Story />
        <ProcessTimeline />
        <BeeEducation />
        <Products />
        <BeeLife />
        <ApiarioMap />
        <Testimonials />
        <InstagramFeed />
        <PaymentMethods />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
