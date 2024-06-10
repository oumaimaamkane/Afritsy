import React from 'react';

function About() {
  return (
    <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto mt-10 px-4">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="w-full lg:w-3/4 md:w-11/12 md:m-6 z-50 relative transform transition-transform duration-500 hover:scale-105 animate-fade-in" style={{ backgroundColor: '#FFB600' }}>
          <img
            src="/images/front2.png"
            className="rounded-md object-cover w-full md:mx-auto md:max-w-sm lg:max-w-none"
            alt="Dining Experience"
            style={{ margin: '30px' }}
          />
        </div>

        <div className="max-md:order-1 max-md:text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:leading-[55px] text-center">Schedule meetings effortlessly</h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed text-center">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>

          <div className="mt-10 space-x-4 text-center animate-slide-in-left">
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0 justify-center md:justify-center">
              <a
                href="/project"
                className="px-6 py-3 text-base font-semibold text-white bg-[#FFB600] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
              >
                DISCOVER OUR PROJECTS
              </a>
              <a
                href="/about"
                className="px-6 py-3 text-base font-semibold text-black bg-transparent rounded-full border-2 border-black hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
              >
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
