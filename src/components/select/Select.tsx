import React, { FC, ReactElement } from 'react';
import { useSelect } from './useSelect';
import { SelectOption, SelectProps, SelectPropsMultiple } from './types';

const Select: FC<SelectProps | SelectPropsMultiple> = ({
  multiple,
  value,
  options,
  placeholder = '',
  containerClassName,
  inputClassName,
  tagClassName,
  placeHolderClassName,
  dropdownClassName,
  optionClassName,
  renderInput,
  renderOption,
  onChange,
}) => {
  const { open, containerRef, setOpen, handleSelect } = useSelect(multiple, onChange);

  return (
    <div className={containerClassName} ref={containerRef}>
      <div className={inputClassName} onClick={() => setOpen((prev) => !prev)}>
        {renderInput ? (
          renderInput(value as (SelectOption & SelectOption[]) | null)
        ) : value ? (
          multiple ? (
            value.map((x) => <span className={tagClassName}>x.label</span>)
          ) : (
            <span className={tagClassName}>value.label</span>
          )
        ) : (
          <span style={{ opacity: 0.5 }} className={placeHolderClassName}>
            {placeholder}
          </span>
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
};

export default Select;
