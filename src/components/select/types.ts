import { ReactElement } from 'react';

export type SelectOption = {
  value: unknown;
  label: string;
};

export interface SelectProps {
  multiple: false;
  value: SelectOption | null;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  tagClassName?: string;
  placeHolderClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  renderInput?: (value: SelectOption | null) => ReactElement;
  renderOption?: (option: SelectOption) => ReactElement;
  onChange: (value: SelectOption | null) => void;
}

export interface SelectPropsMultiple {
  multiple: true;
  value: SelectOption[] | null;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  tagClassName?: string;
  placeHolderClassName?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  renderInput?: (value: SelectOption[] | null) => ReactElement;
  renderOption?: (option: SelectOption) => ReactElement;
  onChange: (value: SelectOption[] | null) => void;
}
