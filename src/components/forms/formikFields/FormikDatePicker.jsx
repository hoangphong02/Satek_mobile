import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormikDatePicker = ({
  name, value, className, onChange, onBlur,
}) => {
  const handleChange = (val) => {
    onChange(name, val);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  return (
    <DatePicker
      name={name}
      className={className}
      selected={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default FormikDatePicker;
