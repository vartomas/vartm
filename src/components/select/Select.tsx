import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { SelectOption } from './types';
import { useSelect } from './useSelect';

interface Props {
  value: SelectOption | null;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  onChange: (value: SelectOption) => void;
}

const Select: FC<Props> = ({
  value,
  options,
  placeholder = '',
  containerClassName,
  inputClassName,
  dropdownClassName,
  optionClassName,
  onChange,
}) => {
  const { open, containerRef, setOpen, handleSelect } = useSelect(onChange);

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
};

export default Select;
