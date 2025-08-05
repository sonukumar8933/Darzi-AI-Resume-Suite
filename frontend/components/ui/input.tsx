// src/components/TextInput.tsx

import React from 'react';
import { FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form';

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: FieldError;
  type?: React.HTMLInputTypeAttribute;
}

/**
 * Reusable text input with label, validation, and error display.
 */
export function TextInput({
  label,
  name,
  placeholder = '',
  register,
  validation = {},
  error,
  type = 'text',
}: TextInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500
          focus:ring-indigo-500 sm:text-sm
          ${error ? 'border-red-500' : ''}`}
        {...register(name, validation)}
      />
      {error && (
        <p role="alert" className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}
