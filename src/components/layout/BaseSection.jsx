import PropTypes from 'prop-types';

export const BaseSection = ({ children, bgcolor, id }) => {
  const colors = {
    orange: "bg-orange-600",
    red: "bg-red-600",
    blue: "bg-blue-600",
    green: "bg-green-600",

  };

  return (
    <div className={`${colors[bgcolor]} w-full h-screen flex items-center justify-center`} id={id}>
      {children}
    </div>
  );
};

BaseSection.propTypes = {
    children: PropTypes.node.isRequired,
    bgcolor: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};