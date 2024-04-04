import { Modal } from 'react-bootstrap';

export const ModalLoadingCreateOrder = ({ show }) => (
  <Modal show={show} centered className="modal-loading-create-order">
    <div className="btn-loading-create-order">
      <i className="iconsminds-shopping-cart" />
    </div>
  </Modal>
);
