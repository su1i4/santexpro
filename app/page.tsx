import Banner from "./sections/banner";
import Services from "./sections/services";
import WhyUs from "./sections/WhyUs";
import AboutUs from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import Contacts from "./sections/contacts";
import Footer from "./components/Footer";
import Application from "./sections/application";

export default function Home() {
  return (
    <div className="">
     <Banner />
     <Services />
     <WhyUs />
     <AboutUs />
     <Application />
     <FAQ />
     <Contacts />
     <Footer />
    </div>
  );
}
