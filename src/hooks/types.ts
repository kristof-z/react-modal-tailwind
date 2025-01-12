export interface ModalInterface {
  close: () => void;
  resize: (options?: { isFullScreen?: boolean }) => void;
  open: () => void;
  isFullScreen?: boolean;
}