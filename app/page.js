
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <WhyUs />
      <Footer />
    </main>
  );
}