import { CustomInput } from 'reactstrap';

const FormikCustomCheckbox = ({
  name, value, disabled, label, onChange,
}) => {
  const handleChange = () => {
    onChange();
  };

  return (
    <CustomInput
      type="checkbox"
      id={name}
      name={name}
      label={label}
      onClick={handleChange}
      checked={value}
      disabled={disabled}
      inline
      readOnly
    />
  );
};

export default FormikCustomCheckbox;
