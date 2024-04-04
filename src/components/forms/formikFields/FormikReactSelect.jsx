import Select from 'react-select';

const FormikReactSelect = ({
  name,
  value,
  options,
  isMulti,
  className,
  onChange,
  onBlur,
  disabled,
  placeholder,
}) => {
  const handleChange = (val) => {
    onChange(name, val);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  return (
    <Select
      isDisabled={disabled}
      className={`react-select ${className}`}
      classNamePrefix="react-select"
      options={options}
      isMulti={isMulti}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default FormikReactSelect;
