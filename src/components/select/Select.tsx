import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { SelectOption } from './types';

interface Props<T> {
  value: SelectOption<T> | null;
  options: SelectOption<T>[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  onChange: (value: SelectOption<T>) => void;
}

function Select<T extends {}>({
  value,
  options,
  placeholder = '',
  containerClassName,
  inputClassName,
  dropdownClassName,
  optionClassName,
  onChange,
}: Props<T>): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleSelect = (option: SelectOption<T>) => {
    setOpen(false);
    onChange(option);
  };

  return (
    <div className={containerClassName} ref={containerRef}>
      <div className={inputClassName} onClick={() => setOpen((prev) => !prev)}>
        {value ? <span>{value.label}</span> : <span>{placeholder}</span>}
      </div>
      {open && (
        <div className={dropdownClassName}>
          {options.map((option, i) => (
            <div key={`${option.label}-${i}`} className={optionClassName} onClick={() => handleSelect(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
