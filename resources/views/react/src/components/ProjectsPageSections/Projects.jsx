import React, { useState } from 'react';
import Pagination from './Pagination';

const projectsData = [
    { id: 1, title: 'Project Title', description: 'Project Description', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1 },
    { id: 2, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/afrique.png', pays: 'Morocco', reviews: 1 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/pana.png', pays: 'Morocco', reviews: 1  },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },

    { id: 1, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1 },
    { id: 2, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1  },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },

    { id: 1, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1 },
    { id: 2, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1  },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },

    { id: 1, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1 },
    { id: 2, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 1  },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },
    { id: 3, title: 'The Magnificent Bogra', description: 'Located in Rajshahi Division, Bogra is one of the oldest and most fascinating towns in Bangladesh', imageUrl: '/images/LOGO.png', pays: 'Morocco', reviews: 16 },
];

const itemsPerPage = 3; // Number of items per page

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = projectsData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(projectsData.length / itemsPerPage);

    return (
        <>
            <div className="flex flex-col items-center text-gray-800 text-center">
                <img src="../../images/Border.png" alt="border" className="my-4" />
                <h1 className="my-4 text-3xl font-bold text-black">OUR PROJECTS</h1>
                <p className="leading-relaxed text-black mb-3">Always dedicated and devoted</p>
                <img src="../../images/HorizontalBorder.png" alt="border" />
            </div>
            <div className=''>
                <div className="container mx-auto p-10 md:p-20 antialiased">
                    {currentItems.map((item, index) => (
                        <article key={item.id} className={`flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1 ${index < currentItems.length - 1 ? 'mb-8' : ''}`}>
                            <img className="w-full max-h-[400px] object-cover md:w-52" src={item.imageUrl} alt="" />
                            <div>
                                <div className="m-6 pb-3">
                                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                                        {item.title}
                                    </h1>
                                    <p className="text-lg text-gray-400 mt-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="sm:flex sm:justify-between pb-10 m-6">
                                        <div>
                                            <div className="text-lg text-gray-700">
                                                <span className="text-gray-900 font-bold">{item.pays}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, index) => (
                                                        <svg key={index} className={`w-4 h-4 mx-px fill-current ${index < item.reviews ? 'text-green-600' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                                            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                                        </svg>
                                                    ))}
                                                </div>
                                                <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                                    {item.reviews} reviews
                                                </div>
                                            </div>
                                            <a
                                            href="/SinglePageProject"
                                            className="inline-block mt-2 px-6 py-3 text-base font-semibold text-white bg-[#FFB600] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
                                        >
                                            Read More
                                        </a>
                                        </div>
                                        
                                    </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
    );
}

export default Projects;
