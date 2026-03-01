import Banner from "./sections/banner";
import Services from "./sections/services";
import WhyUs from "./sections/WhyUs";
import AboutUs from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import Contacts from "./sections/contacts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
     <Banner />
     <Services />
     <WhyUs />
     <AboutUs />
     <FAQ />
     <Contacts />
     <Footer />
    </div>
  );
}
