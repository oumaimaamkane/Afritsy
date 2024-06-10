import React from 'react';
import { useInView } from 'react-intersection-observer';

function Benefices() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <div className="flex flex-col justify-center p-8 mx-auto">
                <div className="items-center text-center">
                    <div className="max-md:order-1 max-md:text-center">
                        <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-gray-900 mb-4">Savor Every Bite</h2>
                        <p className="mt-4 text-base text-gray-600 leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>
                    </div>
                </div>

                <div ref={ref} className="flex m-3 p-8 gap-12 flex-col md:flex-row items-start justify-center">
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center p-4"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: `translateY(${inView ? 0 : '5px'})`,
                                transition: 'opacity 0.7s ease, transform 0.7s ease',
                                transitionDelay: `${index * 0.2}s`,
                                background: '#F0F0F6',
                            }}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="rounded-full p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#FFB600"
                                        className="w-14 h-14"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold">Safe</h3>
                                <p className="hover:text-[#FFB600] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Our products are secure and private out-of-the-box</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Benefices;
