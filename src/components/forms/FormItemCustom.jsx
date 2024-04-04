import React from 'react';
import { FormGroup, Label } from 'reactstrap';

export const FormItemCustom = ({
  label,
  isRequire = false,
  classLabel = '',
  className = '',
  style,
  children,
}) => (
  <FormGroup className={`w-100 ${className}`} style={style}>
    <Label
      className={`d-flex align-items-center ${classLabel}`}
      style={{ gap: '0 5px' }}
    >
      {label}
      {!isRequire && (
        <div className="" style={{ color: '#adb5bd' }}>
          (Optional)
        </div>
      )}
    </Label>
    {children}
  </FormGroup>
);
