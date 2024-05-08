import { ReactElement } from 'react';

export type SelectOption<T = unknown> = {
  value: T;
  label: string;
};

export interface SelectProps<T> {
  multiple: false;
  value: SelectOption<T> | null;
  options: SelectOption<T>[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  tagClassName?: string;
  placeHolderClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  renderInput?: (value: SelectOption<T> | null) => ReactElement;
  renderOption?: (option: SelectOption<T>) => ReactElement;
  onChange: (value: SelectOption<T> | null) => void;
}

export interface SelectPropsMultiple<T> {
  multiple: true;
  value: SelectOption<T>[] | null;
  options: SelectOption<T>[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  tagClassName?: string;
  placeHolderClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  renderInput?: (value: SelectOption<T>[] | null) => ReactElement;
  renderOption?: (option: SelectOption<T>) => ReactElement;
  onChange: (value: SelectOption<T>[] | null) => void;
}
