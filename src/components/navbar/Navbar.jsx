import PropTypes from "prop-types";

const Navbar = ({ label }) => {
  return (
    <>
      <nav>
        <a>{label}</a>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  label: PropTypes.string,
};

export default Navbar;
