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
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-20 flex items-center justify-center bg-[#80808080] cursor-default"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <div className="bg-white p-4 rounded shadow-lg">{children}</div>
    </div>
  );
}

export default CustomModal;
