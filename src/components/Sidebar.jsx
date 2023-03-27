import React, { useState } from "react";
import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router-dom";
import { mainNavlinks, subNavlinks, thirdNavlinks } from "../shared/constants";
import { Logo } from "../shared/assets";
import {
  FilledButton,
  OutlineButton,
} from "../shared/components/CustomButtons";

import { BsQuestionCircle } from "react-icons/bs";
import { IoMdArrowDropleft } from "react-icons/io";
function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Dashboard");
  return (
    <>
      <div className="flex gap-3 flex-col p-2 top-0 sticky min-w-[300px] h-screen bg-[#FFFBF7]  ">
        <div className="flex flex-col gap-y-3 ml-[1rem]">
          <Link to="/">
            <NavLink styles="" imgUrl={Logo} />
          </Link>
        </div>

        <div className="flex flex-col gap-[2.5rem] mt-[1.4rem]">
          <div className="flex mx-[1rem] flex-col gap-1 ">
            <span className="">Main Pages</span>
            {mainNavlinks.map((link) => (
              <NavLink
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={(event) => {
                  event.preventDefault();
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
          <div className="flex mx-[1rem] flex-col gap-1">
            <span>Account Payments</span>

            {subNavlinks.map((link) => (
              <NavLink
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={(event) => {
                  event.preventDefault();
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
          <div className="flex mx-[1rem] flex-col gap-1">
            <span>Send Payments</span>

            {thirdNavlinks.map((link) => (
              <NavLink
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={(event) => {
                  event.preventDefault();
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col mx-[1rem] my-[3rem] gap-3">
          <FilledButton
            startIcon={<BsQuestionCircle />}
            title="Support"
            styles={{
              width: "140px",
              borderRadius: "32px",

              backgroundColor: "#EF2C5A",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#EF2C5A",
                opacity: "0.9",
              },
            }}
          />
          <OutlineButton
            title="Hide Panel"
            startIcon={<IoMdArrowDropleft />}
            styles={{
              width: "140px",
              color: "#000000",
              "&:hover": {
                borderColor: "#000",
                opacity: "0.9",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
