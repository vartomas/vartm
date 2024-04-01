import React, { ReactElement } from 'react';
import { useSelect } from './useSelect';
import { SelectProps } from './types';

function Select<T extends {}>({
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
}: SelectProps<T>): ReactElement {
  const { open, containerRef, setOpen, handleSelect } = useSelect<T>(onChange);

  return (
    <div className={containerClassName} ref={containerRef}>
      <div className={inputClassName} onClick={() => setOpen((prev) => !prev)}>
        {renderInput ? (
          renderInput(value)
        ) : value ? (
          <span>{value.label}</span>
        ) : (
          <span style={{ opacity: 0.5 }}>{placeholder}</span>
        )}
      </div>
      {open && (
        <div className={dropdownClassName}>
          {options.map((option, i) => (
            <div key={`${option.label}-${i}`}>
              <div className={optionClassName} onClick={() => handleSelect(option)}>
                {renderOption ? renderOption(option) : option.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
