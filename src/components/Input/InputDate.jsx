import React, { useEffect, useState, memo } from 'react';
import { InputGroup, Label } from 'reactstrap';
import ReactInputDateMask from 'react-input-date-mask';
import './inputCustom.scss';

const InputDate = memo((
  {
    labelFor,
    labelContent,
    isRequired,
    isError,
    msgError,
    fieldValue,
    className = '',
    disabled,
    ...rest
  },
) => {
  const { onChange: handleChange, value, isValid } = rest;
  const [inputDate, setInputDate] = useState(value || '');
  useEffect(() => {
    if (inputDate) {
      handleChange(inputDate);
    }
  }, [inputDate]);
  return (
    <div className={`input-custom input-custom-date ${className}`}>
      {labelContent && (
      <Label htmlFor={labelFor}>
        {labelContent}{' '}
        {isRequired && <span className="is-required">*</span>}
      </Label>
      )}
      <InputGroup>
        <ReactInputDateMask
          className={
              isError
                ? 'form-control is-invalid'
                : isValid
                  ? 'form-control is-valid'
                  : 'form-control'
            }
          disabled={disabled}
          value={inputDate}
          mask="dd/mm/yyyy"
          showMaskOnFocus={false}
          showMaskOnHover={false}
          onChange={(e) => setInputDate(e)}
        />
      </InputGroup>
      {isError && <div className="form-error-msg">{msgError}</div>}
    </div>
  );
});

export default InputDate;
