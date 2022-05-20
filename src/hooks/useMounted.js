import { useRef, useEffect } from 'preact/hooks';

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  });
  return isMounted;
};

export default useIsMounted