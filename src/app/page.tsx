import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Story from "@/sections/Story";
import Bees from "@/sections/Bees";
import StickyCTA from "@/components/StickyCTA";
import Timeline from "@/sections/Timeline";
import MediaGallery from "@/sections/MediaGallery";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Products from "@/sections/Products";
import Documentary from "@/sections/Documentary";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Story />

      <Bees />

      <Products />

      <Services />

      <Gallery />

      <Timeline />

      <MediaGallery />

      <Testimonials />

      <Documentary />

      <FAQ />

      <Contact />

      <Footer />
      <StickyCTA />
    </main>
  );
}