import { useEffect, useRef, useState } from 'react';

export const useSelect = <T>(onChange: (value: { label: string; value: T }) => void) => {
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

  const handleSelect = (option: { label: string; value: T }) => {
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
