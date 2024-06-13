import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMiniSidebar, setIsMiniSidebar] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setIsMiniSidebar(!isSidebarOpen); 
    };
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <>
            <aside className={`w-30 -translate-x-30 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#080808] ${isSidebarOpen ? '' : '-translate-x-full'}`}>
                {/* Your sidebar content here */}
                <div className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white bg-[#1E293B]  absolute top-2 rounded-full h-12">
                    <div className="flex pl-4 items-center space-x-2 ">
                        <div onClick={toggleSidebar} className="text-white hover:text-[#EFA300]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div onClick={toggleSidebar} className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover-[#EFA300]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                </div>

                {/* <!-- MINI SIDEBAR--> */}
                <div className={`mini mt-20 flex flex-col space-y-4 w-full h-[calc(100vh)] ${isMiniSidebar}`}>
                    <div className="hover:ml-4 justify-end pr-3 text-white hover:text-purple-500 w-full bg-[#080808] hover:bg-[#EFA300] rounded-full transform ease-in-out duration-300 flex" style={{ marginLeft: !isSidebarOpen ? '45px' : '0' }}>
                        <div className="flex items-center">
                            <a href="/Dashboard" className="bg-opacity-25 rounded-md py-2 px-6 m-3 text-sm font-bold text-white">Dashboard</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                    <div className="hover:ml-4 justify-end pr-3 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#080808] hover:bg-[#EFA300] rounded-full transform ease-in-out duration-300 flex" style={{ marginLeft: !isSidebarOpen ? '45px' : '0' }}>
                        <div className="flex items-center">
                            <a href="/Projects" className="bg-opacity-25 rounded-md py-2 px-6 m-3 text-sm font-bold text-white">Projects</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                    <div className="hover:ml-4 justify-end pr-3 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#080808] hover:bg-[#EFA300] rounded-full transform ease-in-out duration-300 flex" style={{ marginLeft: !isSidebarOpen ? '45px' : '0' }}>
                        <div className="flex items-center">
                            <a href="/Services" className="bg-opacity-25 rounded-md py-2 px-6 m-3 text-sm font-bold text-white">Services</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                    <div className="hover:ml-4 justify-end pr-3 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#080808] hover:bg-[#EFA300] rounded-full transform ease-in-out duration-300 flex" style={{ marginLeft: !isSidebarOpen ? '45px' : '0' }}>
                        <div className="flex items-center">
                            <a href="/Member" className="bg-opacity-25 rounded-md py-2 px-6 m-3 text-sm font-bold text-white">Members</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                    <div className="hover:ml-4 justify-end pr-3 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#080808] hover:bg-[#EFA300] rounded-full transform ease-in-out duration-300 flex" style={{ marginLeft: !isSidebarOpen ? '45px' : '0' }}>
                        <div className="flex items-center">
                            <a href="/Pays" className="bg-opacity-25 rounded-md py-2 px-6 m-3 text-sm font-bold text-white">Pays</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </div>
                    </div>
                    <div className="hover:ml-4 justify-end pr-3 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#080808] hover:bg-[#EFA300] rounded-full transform ease-in-out duration-300 flex mt-12" style={{ marginLeft: !isSidebarOpen ? '45px' : '0' }}>
                        <div className="flex items-center">
                            <a href="#" className="bg-opacity-25 rounded-md py-2 px-6 m-3 text-sm font-bold text-white" onClick={handleLogout}>Logout</a>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                <path fill="#EFA300" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </aside>

        </>
    )
}

export default Sidebar
