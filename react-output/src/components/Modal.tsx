interface ModalProps {
  message: string;
  isOpen: boolean;
  onYes: () => void;
  onNo: () => void;
}

export const Modal = ({ message, isOpen, onYes, onNo }: ModalProps) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Confirm</p>
        </header>
        <section className="modal-card-body">{message}</section>
        <footer className="modal-card-foot">
          <button className="button modal-no" onClick={onNo}>
            No
          </button>
          <button className="button is-primary modal-yes" onClick={onYes}>
            Yes
          </button>
        </footer>
      </div>
    </div>
  );
};
