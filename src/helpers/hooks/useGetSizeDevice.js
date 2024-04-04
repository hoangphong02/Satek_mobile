import { useState, useEffect } from 'react';

export function useGetSizeDevice() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  function handleResize() {
    if (window?.innerWidth && window?.innerHeight) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }

  useEffect(() => {
    // window.addEventListener('load', handleResize);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
