import { useRef, useCallback } from 'react';

export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    isDragging.current = true;
    const rect = ref.current.getBoundingClientRect();
    startY.current = e.clientY - rect.top;
    scrollTop.current = ref.current.scrollTop;
    ref.current.style.cursor = 'grabbing';
    ref.current.style.userSelect = 'none';
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (ref.current) {
      ref.current.style.cursor = 'grab';
      ref.current.style.removeProperty('user-select');
    }
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const rect = ref.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const walk = (y - startY.current);
    ref.current.scrollTop = scrollTop.current - walk;
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (ref.current) {
      ref.current.style.cursor = 'grab';
      ref.current.style.removeProperty('user-select');
    }
  }, []);

  return {
    ref,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave,
    style: { cursor: 'grab' }
  };
}
