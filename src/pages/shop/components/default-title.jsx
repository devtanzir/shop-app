import PropTypes from "prop-types";
const DefaultTitle = ({ title }) => {
  return (
    <>
      <h2 className="text-[13px] font-normal tracking-[2px] uppercase">
        {title}
      </h2>
      <div className="w-12 h-[1px] bg-black mt-4 mb-6" />
    </>
  );
};
DefaultTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default DefaultTitle;
