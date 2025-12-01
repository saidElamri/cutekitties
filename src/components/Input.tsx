import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <label className="text-sm font-semibold text-kitty-text dark:text-gray-300 ml-2">{label}</label>}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-2xl border-2 outline-none transition-all duration-300
            ${error 
              ? 'border-red-400 bg-red-50 dark:bg-red-900/20 focus:border-red-500' 
              : 'border-kitty-blue/30 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-kitty-blue focus:ring-2 focus:ring-kitty-blue/20'
            }
            placeholder-gray-400 dark:placeholder-gray-500 text-kitty-text dark:text-white
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 dark:text-red-400 ml-2 animate-pulse">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
