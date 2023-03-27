import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import MenuIcon from "@mui/icons-material/Menu";
import { mobileNavlinks } from "../shared/constants";
import { Logo } from "../shared/assets";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div>
      {/* Small screen navigation */}
      <div className=" flex justify-between items-center relative p-4 border-b-[1px] border-black mb-2">
        <div className=" flex justify-center items-center cursor-pointer">
          <img src={Logo} alt="logo" className=" h-[30px] object-contain" />
        </div>

        <MdMenu
          className="cursor-pointer text-black text-[2rem]"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[-30%] right-0 left-0 bg-[#fff] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {mobileNavlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4  ${
                  isActive === link.name && "text-[#EF2C5A]"
                }`}
                onClick={() => {
                  if (!link.disabled) {
                    setToggleDrawer(false);
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              >
                <span
                  className={`text-[24px] ${
                    isActive && isActive === link.name && "text-[#EF2C5A]"
                  } `}
                >
                  {link.imgUrl}
                </span>
                <p
                  className={`ml-[20px] text-[14px] ${
                    isActive === link.name ? "font-semibold " : "font-medium"
                  } ${
                    link.disabled ? "cursor-not-allowed " : "cursor-pointer"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
