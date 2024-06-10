import React from 'react';

function Hero() {
    return (
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
            <div className="max-md:order-1 max-md:text-center animate-fade-in">
                <h2 className="md:text-3xl text-3xl md:leading-10 font-extrabold text-[#333]">Lorem ipsum dolor sit amet </h2>
                <h2 className="md:text-3xl text-3xl text-[#FFB600] md:leading-10 font-extrabold text-[#333] mb-4">you can do with AFRITSY</h2>
                <p className="mt-4 text-base text-[#666] leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today
                    Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>
                <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6 justify-center">
                    <a href="/project" className="px-6 py-3 text-base font-semibold text-white bg-[#FFB600] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Explore Our Menu</a>
                </div>
            </div>
            <div className="md:h-[450px] transform transition-transform duration-500 hover:scale-105">
                <img src="/images/resize.jpg" className="w-full h-full object-cover rounded-lg shadow-xl" alt="Dining Experience" />
            </div>
        </div>
    )
}

export default Hero;
