import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Story = dynamic(() => import('@/components/Story'), { ssr: false, loading: () => <div className="h-24" /> });
const ProcessTimeline = dynamic(() => import('@/components/ProcessTimeline'), { ssr: false, loading: () => <div className="h-24" /> });
const BeeEducation = dynamic(() => import('@/components/BeeEducation'), { ssr: false, loading: () => <div className="h-24" /> });
const Products = dynamic(() => import('@/components/Products'), { ssr: false, loading: () => <div className="h-64" /> });
const MielRobleSpecial = dynamic(() => import('@/components/MielRobleSpecial'), { ssr: false, loading: () => <div className="h-24" /> });
const ConsumirMiel = dynamic(() => import('@/components/ConsumirMiel'), { ssr: false, loading: () => <div className="h-24" /> });
const BeeLife = dynamic(() => import('@/components/BeeLife'), { ssr: false, loading: () => <div className="h-24" /> });
const ServiciosApícolas = dynamic(() => import('@/components/ServiciosAp\u00edcolas'), { ssr: false, loading: () => <div className="h-24" /> });
const NuestroEntorno = dynamic(() => import('@/components/NuestroEntorno'), { ssr: false, loading: () => <div className="h-24" /> });
const ApiarioMap = dynamic(() => import('@/components/ApiarioMap'), { ssr: false, loading: () => <div className="h-24" /> });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false, loading: () => <div className="h-24" /> });
const PaymentMethods = dynamic(() => import('@/components/PaymentMethods'), { ssr: false, loading: () => <div className="h-24" /> });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false, loading: () => <div className="h-24" /> });
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'), { ssr: false, loading: () => <div className="h-24" /> });

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
