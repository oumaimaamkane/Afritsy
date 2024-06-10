import React from "react";
import Slider from "react-slick";

function CenterMode() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true, 
        autoplaySpeed: 4000, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <div className="slider-container">
            <div className="mt-6 flex flex-col p-8 bg-gradient-to-r from-[#EFA300] via-[#3A3B3C] to-[#EFA300]">
                <Slider {...settings}>
                    <div className="flex justify-center items-center border border-gray-300 p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFB600" className="w-14 h-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Safe</h3>
                            <p>Our products are secure and private out-of-the-box</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center border border-gray-300 p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFB600" className="w-14 h-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Safe</h3>
                            <p>Our products are secure and private out-of-the-box</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center border border-gray-300 p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFB600" className="w-14 h-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Safe</h3>
                            <p>Our products are secure and private out-of-the-box</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-center items-center border border-gray-300 p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFB600" className="w-14 h-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Safe</h3>
                            <p>Our products are secure and private out-of-the-box</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center border border-gray-300 p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFB600" className="w-14 h-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">Safe</h3>
                            <p>Our products are secure and private out-of-the-box</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center border border-gray-300 p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="rounded-full p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFB600" className="w-14 h-14">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold">change</h3>
                            <p>Our products are secure and private out-of-the-box</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default CenterMode;
