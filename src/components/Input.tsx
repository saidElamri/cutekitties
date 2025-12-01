import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-semibold text-kitty-text ml-2">{label}</label>}
      <input
        className={`
          w-full px-4 py-3 rounded-2xl border-2 outline-none transition-all duration-300
          ${error 
            ? 'border-red-400 bg-red-50 focus:border-red-500' 
            : 'border-kitty-blue/30 bg-white focus:border-kitty-blue focus:ring-2 focus:ring-kitty-blue/20'
          }
          placeholder-gray-400 text-kitty-text
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-500 ml-2">{error}</span>}
    </div>
  );
};
