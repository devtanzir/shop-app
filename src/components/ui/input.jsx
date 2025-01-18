import PropTypes from "prop-types";

const Input = ({
  name,
  placeholder,
  type,
  className,
  onChange,
  value,
  onFocus,
  onBlur,
}) => {
  return (
    <>
      <input
        className={`h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 border-gray-400 bg-gray-200 ${className}`}
        id={name}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
