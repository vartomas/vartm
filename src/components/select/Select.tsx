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
  renderInput?: (value: SelectOption | null) => ReactElement;
  renderOption?: (option: SelectOption) => ReactElement;
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
  renderInput,
  renderOption,
  onChange,
}) => {
  const { open, containerRef, setOpen, handleSelect } = useSelect(onChange);

  return (
    <div className={containerClassName} ref={containerRef}>
      {renderInput ? (
        renderInput(value)
      ) : (
        <div className={inputClassName} onClick={() => setOpen((prev) => !prev)}>
          {value ? <span>{value.label}</span> : <span style={{ opacity: 0.5 }}>{placeholder}</span>}
        </div>
      )}
      {open && (
        <div className={dropdownClassName}>
          {options.map((option, i) => (
            <>
              {renderOption ? (
                renderOption(option)
              ) : (
                <div key={`${option.label}-${i}`} className={optionClassName} onClick={() => handleSelect(option)}>
                  {option.label}
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
