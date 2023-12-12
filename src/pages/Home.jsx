import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
