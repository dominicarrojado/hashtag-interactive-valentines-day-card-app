import { useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }: { children: ReactNode }) {
  const [container, setContainer] = useState<HTMLDivElement>();

  useEffect(() => {
    const el = document.createElement('div');

    setContainer(el);

    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return container ? createPortal(children, container) : null;
}

export default Portal;
