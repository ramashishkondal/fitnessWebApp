import { CustomModalProps } from './types';

function CustomModal({
  closeModal,
  isModalShown,
  children,
}: Readonly<CustomModalProps>) {
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
    <button
      type="button"
      className="fixed inset-0 flex items-center justify-center bg-[#80808080] cursor-default"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-4 rounded shadow-lg">{children}</div>
    </button>
  );
}

export default CustomModal;
