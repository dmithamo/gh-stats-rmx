'use client';

import { type RefObject, useEffect } from 'react';

export function useClickOutside(ref: RefObject<HTMLElement> | null, handleClickOutside: () => void) {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent | FocusEvent) => {
      const target = event.target as Node;
      if (!target || !target.isConnected) return;

      const isOutside = ref && !(ref.current as Node)?.contains(target);

      if (isOutside) {
        handleClickOutside();
      }
    };
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [ref, handleClickOutside]);
}
