import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Stats from "@/components/Home/Stats/Stats";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import ExpertSolution from "@/components/Services/ExpertSolution/ExpertSolution";
import Hero from "@/components/Services/Hero/Hero";


export default function ServicePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ExpertSolution />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}