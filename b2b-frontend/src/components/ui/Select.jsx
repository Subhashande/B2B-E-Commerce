import React from "react";

const Select = ({ options = [], value, onChange, label = "", className = "", ...props }) => {
  return (
    <div className="w-full mb-4">
      {label && <label className="block text-sm font-bold text-slate-700 mb-1.5">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 appearance-none
          focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200
          cursor-pointer
          ${className}
        `}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
