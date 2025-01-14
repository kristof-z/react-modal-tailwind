
export interface ModalProps extends ModalOptions {
  open: boolean;
  onOpenChange: (nextOpen: boolean) => void;
  children: React.ReactNode;
}

export interface ModalOptions {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  fullscreen?: boolean;
  isResizable?: boolean;
  isClosable?: boolean;
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  defaultTitle?: string;
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}