import React, { FC, useState } from 'react';
import { SelectOption } from './types';

interface Props {
  value: SelectOption | null;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  dropdownContainerClassName?: string;
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
  dropdownContainerClassName,
  dropdownClassName,
  optionClassName,
  onChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (option: SelectOption) => {
    setMenuOpen(false);
    onChange(option);
  };

  return (
    <div className={containerClassName}>
      <div className={inputClassName} onClick={() => setMenuOpen((prev) => !prev)}>
        {value ? <span>{value.label}</span> : <span>{placeholder}</span>}
      </div>
      <div className={dropdownContainerClassName}>
        {menuOpen && (
          <div className={dropdownClassName}>
            {options.map((option) => (
              <div className={optionClassName} onClick={() => handleSelect(option)}>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
