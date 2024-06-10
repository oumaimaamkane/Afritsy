import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageChange = (page) => {
        onPageChange(page);
    };

    const visiblePages = 5;
    const halfVisiblePages = Math.floor(visiblePages / 2);

    let startPage = currentPage - halfVisiblePages;
    let endPage = currentPage + halfVisiblePages;

    if (startPage < 1) {
        endPage += Math.abs(startPage) + 1;
        startPage = 1;
    }
    if (endPage > totalPages) {
        startPage -= endPage - totalPages;
        endPage = totalPages;
    }
    startPage = Math.max(1, startPage);

    return (
        <div className="flex justify-center my-4">
            <button 
                onClick={handlePrev} 
                disabled={currentPage === 1} 
                className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? 'cursor-not-allowed' : 'text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512">
                    <path fill="#020203" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button 
                    key={startPage + index}
                    onClick={() => handlePageChange(startPage + index)} 
                    className={`px-4 py-2 mx-1 rounded-full ${currentPage === startPage + index ? 'bg-[#FFB600]' : 'bg-gray-300'}`}>
                    {startPage + index}
                </button>
            ))}
            <button 
                onClick={handleNext} 
                disabled={currentPage === totalPages} 
                className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? 'cursor-not-allowed' : 'text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512">
                    <path fill="#000000" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                </svg>
            </button>
        </div>
    );
}

export default Pagination;
