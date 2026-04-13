import React from "react";

const Table = ({ headers = [], data = [], renderRow, className = "" }) => {
  return (
    <div className={`w-full overflow-x-auto rounded-2xl border border-slate-100 ${className}`}>
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {data.length > 0 ? (
            data.map((item, idx) => renderRow(item, idx))
          ) : (
            <tr>
              <td colSpan={headers.length} className="px-6 py-12 text-center text-slate-400 font-medium">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
