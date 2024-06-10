import React from 'react';
import { useInView } from 'react-intersection-observer';

function Story() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="mx-auto">
            <div className="text-center p-8">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Why choose US?
                </h2>
                <div className="w-full mx-auto py-10">

                    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                        <div className="lg:w-[50%] xs:w-full animate__animated animate__fadeIn">
                            <img className={`rounded-lg transition-all duration-700 ease-in-out ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-10'}`} src="/images/Frame 35.png" alt="billboard image" ref={ref} />
                        </div>
                        <div className="lg:w-[50%] sm:w-full xs:w-full md:p-4 xs:p-0 rounded-md animate__animated animate__fadeIn">
                            <h2 className="text-3xl font-semibold text-gray-900 transition-all duration-300 transform">{inView ? "Lorem ipsum dolor sit amet consectetur" : ""}</h2>
                            <p className={`text-md mt-4 transition-all duration-300 transform ${inView ? 'opacity-100' : 'opacity-0'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                                veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                                sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                                nobis tempora possimus ullam!</p>
                        </div>
                    </div>

                    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">


                        <div className="lg:w-[50%] xs:w-full md:p-4 xs:p-0 rounded-md animate__animated animate__fadeIn">
                            <h2 className="text-3xl font-semibold text-black transition-all duration-300 transform">{inView ? "Lorem ipsum dolor sit amet consectetur" : ""}</h2>

                            <p className={`text-md mt-4 transition-all duration-300 transform ${inView ? 'opacity-100' : 'opacity-0'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                                veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                                sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                                nobis tempora possimus ullam!</p>
                        </div>

                        <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full animate__animated animate__fadeIn">
                            <img className={`rounded-lg transition-all duration-700 ease-in-out ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-10'}`} src="/images/pana.png" alt="billboard image" ref={ref} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;
