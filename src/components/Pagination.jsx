import React from 'react';
import Image from 'next/image';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <div className="buttons flex items-center">
            <button
                className="button w-[40px] h-[40px] flex justify-center items-center rounded-full"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Image src={'/left.svg'} height={18} width={18} alt="Previous" />
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    className={`button w-[40px] h-[40px] flex justify-center items-center rounded-full ${currentPage === page ? 'bg-[#F2E8F2]' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="button w-[40px] h-[40px] flex justify-center items-center rounded-full"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <Image src={'/right.svg'} height={18} width={18} alt="Next" />
            </button>
        </div>
    );
};

export default Pagination;
