import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  FilledButton,
  OutlineButton,
} from "../shared/components/CustomButtons";
import { InputTextField, SelectField } from "../shared/components/InputField";
import { HiArrowDown } from "react-icons/hi";
import { MainGraph, SalesWidgets } from "../components";
import useMediaQuery from "../shared/hooks/useMediaQuery";

function Dashboard() {
  const currency = [
    {
      value: "USD",
      label: "USD",
    },
  ];

  const days = [
    {
      value: "7 days",
      label: "7 days",
    },
    {
      value: "30 days",
      label: "30 days",
    },
  ];

  const [selectedDays, setSelectedDays] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  const handleClick = (dayIndex) => {
    setSelectedDays(dayIndex);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h3 className="text-[20px] font-medium">Sales Overview</h3>

        <SalesWidgets />
        <div className="flex gap-2 my-5  2xl:flex-row flex-col">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 ">
                <h3>Sales</h3>|
                {isSmallScreen ? (
                  <span className="flex items-center font-medium cursor-pointer">
                    Filters <MdOutlineKeyboardArrowDown />
                  </span>
                ) : (
                  <>
                    {days.map((day, index) => (
                      <span
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`cursor-pointer ${
                          selectedDays === index ? "text-[#EF2C5A]" : ""
                        }`}
                      >
                        {day.label}
                      </span>
                    ))}
                    <SelectField value="USD" options={currency} />
                    <InputTextField
                      styles={{
                        width: "290px",
                      }}
                      endIcon={
                        <MdOutlineKeyboardArrowDown className="text-[16px]" />
                      }
                    />
                  </>
                )}
              </div>
              <OutlineButton
                startIcon={<HiArrowDown />}
                title="Download Report"
                styles={{
                  color: "#000",
                  marginRight: isSmallScreen ? "0" : "1.3rem",
                  "&:hover": {
                    borderColor: "#000",
                    opacity: "0.9",
                  },
                }}
              />
            </div>
            <MainGraph />
          </div>
          <div className="flex mt-[3.3rem]">
            <div className="2xl:w-[305px] 2xl:h-[284px] w-full items-center  flex 2xl:flex-col justify-between bg-[#EF2C5A] rounded-[8px] p-4">
              <span className="2xl:w-[220px] w-[50%] leading-[34px] text-[20px]  font-medium text-[#fff]">
                KlashaWire - send money to businesses globally from Africa
              </span>
              <FilledButton
                title="Send a Wire"
                styles={{
                  width: "130px",
                  color: "#fff",
                  backgroundColor: "#000",
                  "&:hover": {
                    backgroundColor: "#131313",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
