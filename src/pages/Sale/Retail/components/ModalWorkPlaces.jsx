import { Form, Formik } from 'formik';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import * as Yup from 'yup';

import { FormikReactSelect } from '~/components/forms/formikFields';
import { translate } from '~/helpers/utils';

const SignupSchema = Yup.object().shape({
  work_place: Yup.object().required(
    translate('sale.modal.error-msg-work-place-require'),
  ),
});

export const ModalWorkPlaces = memo(({ setWorkPlaceActive, setIsShowModalWorkPlaces }) => {
  const { isGetAllWorkPlacesSaleRequest, getAllWorkPlacesSaleState } = useSelector(
    (store) => store.sale,
  );

  const onSubmit = (values) => {
    setWorkPlaceActive(values.work_place);
    setIsShowModalWorkPlaces(false);
  };

  return (
    <Modal
      isOpen
      size="sm"
      className="sale modal-confirm-actions-customer-sale modal-work-places"
    >
      <ModalHeader>{translate('sale.modal.work-places.title')}</ModalHeader>
      <Formik
        initialValues={{
          work_place: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({
          setFieldValue, setFieldTouched, values, errors, touched,
        }) => (
          <Form className="av-tooltip">
            <ModalBody>
              <FormGroup className="w-100">
                <FormikReactSelect
                  name="work_place"
                  id="work_place"
                  value={values.work_place}
                  options={getAllWorkPlacesSaleState?.data?.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  disabled={isGetAllWorkPlacesSaleRequest}
                  placeholder="---"
                />
                {errors.work_place && touched.work_place ? (
                  <div className="invalid-feedback d-block">
                    {errors.work_place}
                  </div>
                ) : null}
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                type="submit"
                className="btn-multiple-state"
              >
                <span className="label">
                  {translate('sale.modal.work-places.btn-submit')}
                </span>
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
});
