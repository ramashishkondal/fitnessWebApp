import { CustomModalProps } from './types';

function CustomModal({ closeModal, isModalShown, children }: CustomModalProps) {
  if (!isModalShown) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 flex items-center justify-center bg-[#80808080]"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-4 rounded shadow-lg">{children}</div>
    </div>
  );
}

export default CustomModal;
