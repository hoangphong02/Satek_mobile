import { CustomInput } from 'reactstrap';

const FormikCustomCheckboxGroup = ({
  name,
  value,
  options,
  inline = false,
  onChange,
  onBlur,
}) => {
  const handleChange = (val) => {
    const valueArray = [...value] || [];
    if (!valueArray.includes(val)) {
      valueArray.push(val);
    } else {
      valueArray.splice(valueArray.indexOf(val), 1);
    }
    onChange(name, valueArray);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  return (
    <>
      {options.map((child, index) => (
        <CustomInput
          key={`${name}_${child.value}_${index}`}
          id={`${name}_${child.value}_${index}`}
          type="checkbox"
          name={child.name}
          label={child.label}
          onChange={() => handleChange(child.value)}
          onBlur={handleBlur}
          checked={value.includes(child.value)}
          disabled={child.disabled}
          inline={inline}
        />
      ))}
    </>
  );
};

export default FormikCustomCheckboxGroup;
