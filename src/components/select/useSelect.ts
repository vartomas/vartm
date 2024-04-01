import { useEffect, useRef, useState } from 'react';
import { SelectOption } from './types';

export const useSelect = (onChange: (value: SelectOption) => void) => {
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

  const handleSelect = (option: SelectOption) => {
    setOpen(false);
    onChange(option);
  };

  return {
    containerRef,
    open,
    setOpen,
    handleSelect,
  };
};
