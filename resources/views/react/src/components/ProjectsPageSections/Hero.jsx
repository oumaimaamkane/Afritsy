import React from 'react';

function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFEEC2]">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] text-[#333] max-w-5xl">
        <div className="order-2 md:order-1 text-center md:text-left animate-fade-in">
          <h2 className="text-3xl md:text-4xl leading-10 font-extrabold text-[#333]">
            Lorem ipsum dolor sit amet
          </h2>
          <h2 className="text-3xl md:text-4xl text-[#FFB600] leading-10 font-extrabold mb-4">
            you can do with AFRITSY
          </h2>
          <p className="mt-4 text-base text-[#666] leading-relaxed">
            Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today. Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0 justify-center md:justify-start">
            <a
              href="/about"
              className="px-6 py-3 text-base font-semibold text-white bg-[#FFB600] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
            >
              Read More about us
            </a>
          </div>
        </div>
        <div className="m-3 order-1 md:order-2 md:h-[450px] transform transition-transform duration-500 hover:scale-105">
          <div className="w-full lg:w-3/4 md:w-11/12 relative transform transition-transform duration-500 hover:scale-105 animate-fade-in" style={{ backgroundColor: '#FFB600' }}>
            <img
              src="/images/front2.png"
              className="rounded-md object-cover w-full sm:m-9 md:mx-auto md:max-w-sm lg:max-w-none"
              alt="Dining Experience"
              style={{ padding: '10px', marginTop: '50px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
