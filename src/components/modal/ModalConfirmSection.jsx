import React from 'react';
import {
  Button, Modal, ModalBody, ModalFooter,
} from 'reactstrap';
import { IntlMessages } from '~/helpers/utils';

const ModalConfirmSection = ({
  isOpen,
  handleClose,
  isLoading,
  handle,
  confirm,
  confirmSure,
}) => (
  <Modal
    isOpen={isOpen}
    size="sm"
    centered
    backdrop="static"
    toggle={handleClose}
  >
    <ModalBody>
      <h3>
        {confirm}
      </h3>
      <p>
        {confirmSure}
      </p>
    </ModalBody>
    <ModalFooter>
      <div className="d-flex align-content-center justify-content-between flex-grow-1">
        <Button
          color="primary"
          disabled={isLoading}
          className={`btn-shadow btn-multiple-state ${
            isLoading ? 'show-spinner disabled' : ''
          }`}
          onClick={handle}
        >
          <span className="spinner d-inline-block">
            <span className="bounce1" />
            <span className="bounce2" />
            <span className="bounce3" />
          </span>
          <span className="label">
            <IntlMessages id="btn.yes" />
          </span>
        </Button>
        <Button
          color="primary"
          outline
          disabled={isLoading}
          className={`btn-shadow btn-multiple-state ${
            isLoading ? 'disabled' : ''
          }`}
          style={
                isLoading ? { cursor: 'no-drop' } : {}
              }
          onClick={handleClose}
        >
          <IntlMessages id="btn.cancel" />
        </Button>
      </div>
    </ModalFooter>
  </Modal>
);

export default ModalConfirmSection;
