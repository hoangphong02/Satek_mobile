import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

import { parseCurrency } from '~/helpers/utils';

const InputPriceCustom = ({
  label, val, setVal, className, isShowVal = true, setIsShowVal = () => {}, ...rest
}) => (
  <FormGroup className={className}>
    <Label>
      {label}
    </Label>
    <Input
      type="text"
      value={isShowVal ? parseCurrency(val, '', 'en-US') : ''}
      onChange={(e) => {
        const value = e.target.value.replace(/,/g, '');
        setVal(value);
        setIsShowVal();
      }}
      {...rest}
    />
  </FormGroup>
);

export default InputPriceCustom;
