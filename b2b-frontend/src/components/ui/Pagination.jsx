import React from "react";
import Button from "./Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      
      <div className="flex items-center space-x-1">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => onPageChange(idx + 1)}
            className={`
              w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200
              ${currentPage === idx + 1 
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" 
                : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"}
            `}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
