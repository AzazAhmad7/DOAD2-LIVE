import React from "react";

const AboutSection = () => {
  return (
    <section
      className="py-16 bg-primary-light text-white border-b-8 border-blue-300"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-6 pl-44 pr-44">
            We are a dedicated team committed to providing the best solutions
            for your needs. Our mission is to deliver high-quality products and
            services that exceed our clients' expectations. With years of
            experience in the industry, we strive to bring innovative ideas and
            exceptional value to every project we undertake.
          </p>
          <p className="text-lg pl-44 pr-44">
            Our team of experts works closely with clients to understand their
            requirements and deliver tailor-made solutions that drive success.
            We believe in transparency, collaboration, and excellence, ensuring
            that each project is handled with utmost care and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
