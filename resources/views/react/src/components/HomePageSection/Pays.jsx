import React from 'react'

function pays() {
    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="flex flex-col items-center text-gray-800 text-center">
                    <img src="../../images/Border.png" alt="border" className="my-4" />
                    <h1 className="my-4 text-3xl font-bold text-black">Our locations</h1>
                    <p className="leading-relaxed text-black mb-3">Always dedicated and devoted</p>
                    <img src="../../images/HorizontalBorder.png" alt="border" />
                </div>
                <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto mt-3">
                    <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                        <div className="max-md:order-1 max-md:text-center z-50 relative">
                            <h2 className="lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"><span className="text-[#FFB600]">Smart</span> Business with <span className="text-[#FFB600]">Smart</span> People</h2>
                            <p className="mt-6 text-base leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                            <div className="mt-8 flex max-sm:flex-col md:m-6 sm:m-6 sm:space-x-4 max-sm:space-y-6 justify-center">
                                <a href="/project" className="px-6 py-3 text-base font-semibold text-white bg-[#FFB600] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Explore Our Menu</a>
                            </div>
                        </div>
                        <div className="lg:h-[550px] md:h-[550px] flex items-center relative ">
                            <img src="../../images/globe-terre-afrique.jpg" className="rounded-md lg:w-4/5 z-50 relative" alt="Dining Experience" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default pays
