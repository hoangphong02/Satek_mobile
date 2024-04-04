import { memo } from 'react';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';

import { translate } from '~/helpers/utils';

export const ModalFailure = memo(() => (
  <Modal
    isOpen
    size="sm"
    className="sale modal-confirm-actions-customer-sale modal-failure"
  >
    <ModalHeader>{translate('sale.modal.failure.title')}</ModalHeader>
    <ModalBody>
      <p
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: translate('sale.modal.failure.description'),
        }}
      />
    </ModalBody>
    <ModalFooter>
      <Button color="danger" className="btn-multiple-state" onClick={() => window.location.reload()}>
        <span className="label">{translate('sale.modal.failure.btn')}</span>
      </Button>
    </ModalFooter>
  </Modal>
));
