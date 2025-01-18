import PropTypes from "prop-types";

const Banner = ({ bgImage, title, punchLine }) => {
  return (
    <div
      className="h-[450px] bg-cover bg-center flex items-center justify-center text-white relative mt-[70px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bgImage})`,
      }}
    >
      <div className="text-center">
        <h1 className="text-[46px] font-light mb-2 tracking-wide">{title}</h1>
        <p className="text-[15px] tracking-wide">{punchLine}</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  punchLine: PropTypes.string.isRequired,
};

export default Banner;
