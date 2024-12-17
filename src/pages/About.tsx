import { Hero } from "../components/Hero";

const About = () => {
  return (
    <>
      <Hero title="Who we are" page="About Us" />
      <section className="flex flex-col md:flex-row items-center px-8 py-12 bg-white">
        {/* Left Side with Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-yellow-200 rounded-lg w-72 h-72 absolute -z-10 top-8 left-8"></div>
          <img
            src="./About.png"
            alt="Wooden Bowls"
            className="w-72 h-auto relative"
          />
        </div>

        {/* Right Side with Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <p className="text-lg text-gray-600 mb-4">
            <strong className="text-gray-800">WOODIES</strong> is the{" "}
            <strong className="font-bold">
              home of modern wooden furniture
            </strong>{" "}
            the answer to your need for furniture with shapes, sizes, and
            colors.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
