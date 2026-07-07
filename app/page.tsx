import Whatsapp from "./components/Whatsapp";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Featured from "./components/Featured";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <Featured />
      <Services />
      <About />
      <Footer />
      <Whatsapp />
    </>
  );
}