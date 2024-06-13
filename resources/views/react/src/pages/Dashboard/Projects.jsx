import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Breadcrumb from '../../components/Breadcrumb';
import Sidebar from '../../components/Sidebar';

function Projects() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="transition-all duration-500 flex-1 ">
                <Navbar />
                <div className={`content p-2 md:p-5 ${isSidebarOpen ? 'ml-44' : 'ml-16'}`}>
                    <Breadcrumb />
                    {/* table */}
                    <div className="my-4 mx-2">
                        <div className="font-[sans-serif] overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 whitespace-nowrap">
                                    <tr>
                                        <th className="p-4 text-left text-sm font-medium text-white bg-[#EFA300]">
                                            Images
                                        </th>
                                        <th className="p-4 text-left text-sm font-medium text-white bg-[#EFA300]">
                                            Title
                                        </th>
                                        <th className="p-4 text-left text-sm font-medium text-white bg-[#EFA300]">
                                            Description
                                        </th>
                                        <th className="p-4 text-left text-sm font-medium text-white bg-[#EFA300]">
                                            
                                        </th>
                                        <th className="p-4 text-left text-sm font-medium text-white bg-[#EFA300]">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="whitespace-nowrap">
                                    <tr className="even:bg-blue-50">
                                        <td className="p-4 text-sm text-black">
                                            John Doe
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            john@example.com
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            Admin
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            2022-05-15
                                        </td>
                                        <td className="p-4">
                                            <button className="mr-4" title="Edit">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-blue-500 hover:fill-blue-700"
                                                    viewBox="0 0 348.882 348.882">
                                                    {/* SVG path for edit icon */}
                                                </svg>
                                            </button>
                                            <button className="mr-4" title="Delete">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                                    {/* SVG path for delete icon */}
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
