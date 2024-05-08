import { useEffect, useRef, useState } from 'react';
import { SelectOption } from './types';

export const useSelect = <T>(
  multiple: boolean,
  onChange: ((value: SelectOption<T> | null) => void) | ((value: SelectOption<T>[] | null) => void)
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleSelect = (option: SelectOption<T> | SelectOption<T>[]) => {
    setOpen((prev) => (multiple ? prev : false));
    onChange(option as (SelectOption<T> & SelectOption<T>[]) | null);
  };

  return {
    containerRef,
    open,
    setOpen,
    handleSelect,
  };
};
