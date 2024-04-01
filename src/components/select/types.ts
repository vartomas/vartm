import { ReactElement } from 'react';

export type SelectOption<T = any> = {
  value: T;
  label: string;
};

export interface SelectProps<T> {
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
