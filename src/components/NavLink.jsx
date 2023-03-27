import React from "react";
import PropTypes from "prop-types";
const NavLink = React.memo(
  ({ name, imgUrl, isActive, disabled, handleClick }) => (
    <div
      className={`h-[48px] rounded-[10px] ${
        isActive && isActive === name && "text-[#EF2C5A]"
      } flex items-center ${!disabled && "cursor-pointer"}`}
      onClick={handleClick}
    >
      {!isActive && (
        <div className="flex gap-3 items-center">
          <img src={imgUrl} alt="nav logo" className="h-[30px]" />
        </div>
      )}
      {isActive && (
        <div className={`flex gap-3 items-center`}>
          <span
            className={`text-[24px] ${
              isActive && isActive === name && "text-[#EF2C5A]"
            } `}
          >
            {imgUrl}
          </span>
          <span>{name}</span>
        </div>
      )}
    </div>
  )
);

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isActive: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default NavLink;
