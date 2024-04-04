import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';
import { translate } from '~/helpers/utils';
import ModalConfirmSection from './ModalConfirmSection';

export const ModalWrapperCustom = ({
  isOpen,
  handleClose,
  centered = true,
  size = 'lg',
  title,
  isLoading,
  handleSubmitForm,
  confirmTitle,
  confirmSureTitle,
  className = '',
  isAllowSubmit,
  isSubmit = false,
  setIsSubmit = () => {},
  isShowFooter = true,
  isActionFailure,
  isActionSuccess,
  children,
}) => {
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

  const handleShowModalConfirm = () => {
    setIsShowModalConfirm(true);
  };

  const handleCloseModalConfirm = () => {
    setIsShowModalConfirm(false);
    if (isSubmit) {
      setIsSubmit(false);
    }
  };

  useEffect(() => {
    if (isSubmit) {
      handleShowModalConfirm();
    }
  }, [isSubmit]);

  useEffect(() => {
    if (isActionFailure || isActionSuccess) {
      handleCloseModalConfirm();
    }
  }, [isActionFailure, isActionSuccess]);
  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={handleClose}
        centered={centered}
        size={size}
        className={className}
      >
        <WrapperHeader title={title} />
        {children}
        {
            isShowFooter && (
            <WrapperFooter
              title={title}
              isLoading={isLoading}
              handleClose={handleClose}
              onSubmit={handleShowModalConfirm}
              isAllowSubmit={isAllowSubmit}
            />
            )
        }
      </Modal>
      <ModalConfirmSection
        isOpen={isShowModalConfirm}
        handleClose={handleCloseModalConfirm}
        isLoading={isLoading}
        handle={handleSubmitForm}
        confirm={confirmTitle}
        confirmSure={confirmSureTitle}
      />
    </>
  );
};

const WrapperHeader = ({ title }) => (
  <div className="modal-header d-flex justify-content-center">
    <h3 className="">{title}</h3>
  </div>
);

const WrapperFooter = ({
  title,
  isLoading,
  handleClose,
  onSubmit,
  isAllowSubmit,
}) => (
  <ModalFooter>
    <Button
      color="primary"
      className={`btn-shadow btn-multiple-state ${
        isLoading ? 'show-spinner' : ''
      }`}
      disabled={!isAllowSubmit}
      onClick={onSubmit}
    >
      <span className="spinner d-inline-block">
        <span className="bounce1" />
        <span className="bounce2" />
        <span className="bounce3" />
      </span>
      <span className="label">{title}</span>
    </Button>
    <Button
      color="primary"
      outline
      className="btn-shadow btn-multiple-state"
      onClick={handleClose}
    >
      {translate('btn.back')}
    </Button>
  </ModalFooter>
);
