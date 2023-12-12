import { TypeAnimation } from "react-type-animation";
import HeroImage from "../images/hero.webp";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center mx-10">
      <div className="w-full lg:w-1/2 mx-auto text-center lg:text-left">
        <div className="lg:ml-2">
          <h1 className="lg:text-5xl text-4xl font-bold text-gray-900">
            Welcome to
          </h1>
          <h1 className="lg:text-5xl text-4xl font-bold text-blue-700">
            <TypeAnimation
              sequence={["EcommScrapper", 2000, "Online Store", 2000]}
              wrapper="div"
              speed={50}
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <div className="max-w-md mt-4 mx-auto lg:mx-0">
            <p className="text-lg text-gray-800">
              Dive into the future of online shopping! I, as your Front End
              Developer, have meticulously designed this E-commerce store for a
              delightful experience. From trending products to intuitive
              interfaces, we're here to redefine your digital shopping
              adventure.
            </p>
          </div>
        </div>
      </div>
      <img
        src={HeroImage}
        alt=""
        className="w-full lg:w-1/2 bg-cover bg-right lg:block"
      />
    </div>
  );
};

export default Hero;
