import { Modal } from 'react-bootstrap';
import Loading from '~/assets/loading.gif';

export const ModalLoading = ({ show }) => (
  <Modal show={show} centered className="modal-loading-create-order">
    <div className="btn-loading-create-order">
      <div>
        <img src={Loading} alt="" className="w-100 h-100 rounded" />
      </div>
    </div>
  </Modal>
);
