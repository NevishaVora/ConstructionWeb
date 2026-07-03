import Branches from "@/components/Home/Branches/Branches";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero/Hero";
import Process from "@/components/Home/Process/Process";
import Services from "@/components/Home/Services/Services";
import Stats from "@/components/Home/Stats/Stats";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Branches />
      <Process />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}