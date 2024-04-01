import React, { ReactElement } from 'react';
import { useSelect } from './useSelect';

interface Props<T> {
  value: { label: string; value: T } | null;
  options: { label: string; value: T }[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  renderInput?: (value: { label: string; value: T } | null) => ReactElement;
  renderOption?: (option: { label: string; value: T }) => ReactElement;
  onChange: (value: { label: string; value: T } | null) => void;
}

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
}: Props<T>): ReactElement {
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
            <div key={`${option.label}-${i}`}>
              {renderOption ? (
                renderOption(option)
              ) : (
                <div className={optionClassName} onClick={() => handleSelect(option)}>
                  {option.label}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
