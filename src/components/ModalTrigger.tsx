import * as React from 'react';
import useModalContext from '../hooks/useModalContext';
import { useMergeRefs } from '@floating-ui/react';

export function ModalTrigger({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const modal = useModalContext();
  const ref = useMergeRefs([modal.refs.setReference]);

  return (
    <button
      ref={ref}
      {...props}
      {...modal.getReferenceProps(props)}
      data-state={modal.open ? 'open' : 'closed'}
    >
      {children}
    </button>
  );
}