import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Home/Contact/Contact";
import Services from "@/components/Home/Services/Services";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import ExplorePackages from "@/components/Packages/ExplorePackages/ExplorePackages";


export default function ServicePage() {
  return (
    <>
      <ExplorePackages />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}