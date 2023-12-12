import React from "react";

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto md:py-24">
        {/* Service 1 */}
        <ServiceCard
          number="1"
          title="24/7 Customer Support"
          description="Our dedicated support team is available 24/7 to assist you with any queries or concerns you may have."
          numberBgColor="bg-gray-500"
          svgBgColor="bg-gray-500"
          textColor="text-white"
          svgPath="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />

        {/* Service 2 */}
        <ServiceCard
          number="2"
          title="Fast and Reliable Delivery"
          description="Enjoy our fast and reliable delivery service to get your products right at your doorstep in no time."
          numberBgColor="bg-gray-500"
          svgBgColor="bg-gray-500"
          textColor="text-white"
          svgPath="M22 12h-4l-3 9L9 3l-3 9H2"
        />

        {/* Service 3 */}
        <ServiceCard
          number="3"
          title="Quality Products"
          description="Discover a wide range of high-quality products carefully curated to meet your needs and preferences."
          numberBgColor="bg-gray-500"
          svgBgColor="bg-gray-500"
          textColor="text-white"
          svgPath="M12 12h-2v-2h2v2zm0 2h-2v2h2v-2zm0 4h-2v2h2v-2z"
        />

        {/* Service 4 */}
        <ServiceCard
          number="4"
          title="Efficient Order Processing"
          description="Experience smooth and efficient order processing, ensuring a hassle-free shopping experience with us."
          numberBgColor="bg-gray-500"
          svgBgColor="bg-gray-500"
          textColor="text-white"
          svgPath="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
        />
      </div>
    </section>
  );
};

const ServiceCard = ({
  number,
  title,
  description,
  numberBgColor,
  svgBgColor,
  textColor,
  svgPath,
}) => {
  return (
    <div
      className={`flex flex-col pb-12 md:flex-row md:items-center md:w-2/3 mx-auto`}
    >
      <div className="flex-shrink-0 w-full md:w-1/6 md:h-24 md:flex md:items-center md:justify-center">
        <div
          className={`h-full w-1 md:h-24 bg-gray-200 pointer-events-none ${numberBgColor}`}
        ></div>
      </div>
      <div className={`md:flex-grow md:pl-8 pl-6 mt-6 md:mt-0`}>
        <div
          className={`flex-shrink-0 w-24 h-24 md:w-16 md:h-16 rounded-full inline-flex items-center justify-center ${svgBgColor}`}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`w-12 h-12 md:w-10 md:h-10 ${textColor}`}
            viewBox="0 0 24 24"
          >
            <path d={svgPath}></path>
          </svg>
        </div>
        <div className={`mt-6 text-gray-900`}>
          <h2 className={`font-medium title-font mb-1 text-xl `}>{title}</h2>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
