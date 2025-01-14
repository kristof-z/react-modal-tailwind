import * as React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useReduxModal } from '../hooks/useReduxModal';

export function ModalTrigger({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { refs, isOpen, ...floatingData } = useReduxModal();
  const ref = useMergeRefs([refs.setReference]);

  return (
    <button
      ref={ref}
      {...props}
      {...floatingData.getReferenceProps?.(props)} // Safely access `getReferenceProps`
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
    </button>
  );
}
