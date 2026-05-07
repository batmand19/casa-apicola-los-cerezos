import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Story from "@/sections/Story";
import Bees from "@/sections/Bees";
import Products from "@/sections/Products";
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

      <Contact />

      <Footer />
    </main>
  );
}