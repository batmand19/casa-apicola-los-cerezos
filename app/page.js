import Hero from '@/components/Hero';
import Story from '@/components/Story';
import ProcessTimeline from '@/components/ProcessTimeline';
import BeeEducation from '@/components/BeeEducation';
import Products from '@/components/Products';
import MielRobleSpecial from '@/components/MielRobleSpecial';
import ConsumirMiel from '@/components/ConsumirMiel';
import BeeLife from '@/components/BeeLife';
import ServiciosApícolas from '@/components/ServiciosApícolas';
import NuestroEntorno from '@/components/NuestroEntorno';
import ApiarioMap from '@/components/ApiarioMap';
import Testimonials from '@/components/Testimonials';
import PaymentMethods from '@/components/PaymentMethods';
import FAQ from '@/components/FAQ';
import LeadMagnet from '@/components/LeadMagnet';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a href="#productos" className="skip-link" aria-label="Saltar al contenido principal">Saltar al contenido</a>

      <Hero />

      <main>
        {/* Ritmo: Claro → Oscuro → Claro → Oscuro */}
        <Story />
        <ProcessTimeline />
        <BeeEducation />
        <Products />
        <MielRobleSpecial />
        <ConsumirMiel />
        <BeeLife />
        <ServiciosApícolas />
        <NuestroEntorno />
        <ApiarioMap />
        <Testimonials />
        <PaymentMethods />
        <FAQ />
        <LeadMagnet />
      </main>

      <Footer />
    </>
  );
}
