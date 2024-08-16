import Modal from 'react-modal';
import { CustomModalProps } from './types';

function CustomModal({
  closeModal,
  isModalShown,
  children,
}: Readonly<CustomModalProps>) {
  if (!isModalShown) {
    return null;
  }

  return (
    <Modal
      isOpen={isModalShown}
      onRequestClose={closeModal}
      className="bg-white p-4 rounded shadow-lg"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-[#80808080]"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
