import React, { useEffect, useState } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { translate } from '~/helpers/utils';
import axios from 'axios';
import { FormikReactSelect } from '../forms/formikFields';

const RegionSection = (props) => {
  const {
    values, setFieldValue, setFieldTouched, errors, touched, parent_id, type, name, isRequired,
  } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    if (parent_id) {
      const payload = {
        level: type,
        limit: 100,
      };
      if (parent_id !== 'none') {
        payload.parent_id = parent_id;
      }
      axios.get(`${process.env.REACT_APP_DEV_MICRO_API}/regions`, { params: payload })
        .then((res) => setData(res.data.data));
    }
  }, [parent_id]);

  return (
    <FormGroup className="w-100 error-l-100">
      <Label>
        {translate(`common.${name}`)}:{' '}
        {isRequired && (
        <span style={{ color: 'red', fontWeight: '600' }}>
          *
        </span>
        )}
      </Label>
      <FormikReactSelect
        name={name}
        id={name}
        value={values?.name}
        options={data?.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
      />
      {errors && touched ? (
        <div className="invalid-feedback d-block">
          {errors}
        </div>
      ) : null}
    </FormGroup>
  );
};

export default RegionSection;
