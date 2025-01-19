import PropTypes from "prop-types";
const Loader = ({
  text = "Loading...",
  size = 24,
  color = "text-blue-500",
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {/* Spinner */}
      <div
        className={`animate-spin rounded-full border-4 border-solid border-gray-300 border-t-${color}`}
        style={{
          width: size,
          height: size,
        }}
      ></div>
      {/* Optional text */}
      {text && <p className="text-sm font-medium text-gray-700">{text}</p>}
    </div>
  );
};

Loader.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
export default Loader;
