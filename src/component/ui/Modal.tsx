import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 bg-slate-500/70 invisible flex justify-center items-center z-[999] ",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-md text-black rounded-md  shadow-lg shadow-slate-700  "
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseModal = ({ children }: { children?: ReactNode }) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          className="size-6 text-red-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between border-b-2 border-slate-700 p-4">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.CloseModal = CloseModal;
export default Modal;
