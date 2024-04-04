import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

const FormikSwitch = ({
  name, value, className, onChange, onBlur, disabled = false,
}) => {
  const handleChange = (val) => {
    onBlur(name, true);
    onChange(name, val);
  };

  return (
    <Switch
      name={name}
      className={className}
      checked={value}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default FormikSwitch;
