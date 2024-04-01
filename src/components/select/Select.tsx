import React, { ReactElement } from 'react';
import { useSelect } from './useSelect';
import { SelectOption } from './types';

interface Props<T> {
  value: SelectOption<T> | null;
  options: SelectOption<T>[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  renderInput?: (value: SelectOption<T> | null) => ReactElement;
  renderOption?: (option: SelectOption<T>) => ReactElement;
  onChange: (value: SelectOption<T> | null) => void;
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
  const { open, containerRef, setOpen, handleSelect } = useSelect<T>(onChange);

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
