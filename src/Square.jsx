import PropTypes from "prop-types";
const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.propTypes = {
  colorValue: PropTypes.string,
  isDarkText: PropTypes.bool,
  hexValue: PropTypes.string,
};

export default Square;
