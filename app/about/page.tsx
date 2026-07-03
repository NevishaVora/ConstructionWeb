import AboutCompany from "@/components/About/AboutCompony/AboutCompony";
import Counters from "@/components/About/Counter/Counter";
import Hero from "@/components/About/Hero/Hero";
import Projects from "@/components/About/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Counters />
      <AboutCompany />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}