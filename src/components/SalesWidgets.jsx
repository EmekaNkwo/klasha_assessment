import React, { useEffect, useState } from "react";
import {
  lastMonthChartData,
  thisMonthChartData,
  weeklyChartData,
} from "../shared/constants";
import useMediaQuery from "../shared/hooks/useMediaQuery";
import MiniGraph from "./Graphs/MiniGraph";

const SalesWidgets = React.memo(() => {
  const [weekyData, setWeeklyData] = useState();
  const [thisMonthyData, setThisMonthData] = useState();
  const [lastMonthData, setLastMonthData] = useState();
  useEffect(() => {
    setWeeklyData(weeklyChartData);
    setThisMonthData(thisMonthChartData);
    setLastMonthData(lastMonthChartData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  return (
    <div>
      <div className="flex gap-[2rem] flex-col lg:flex-row flex-wrap">
        <div className="h-[240px] w-full 2xl:w-[270px]  p-4 border-[1px] border-[#000] flex flex-col gap-2 rounded-[8px]">
          <span className="text-[14px] font-normal">Today's Sales</span>
          <span className="text-[20px] font-medium">₦1,652.50</span>
        </div>
        {isSmallScreen ? (
          <>
            <div className="h-[240px] w-full 2xl:w-[300px] p-4 items-center justify-between bg-[#000] flex  gap-2 rounded-[8px] text-[#fff]">
              <div className="flex flex-col gap-2 justify-center">
                <span className="text-[14px] font-normal">
                  24 Aug - 01 Sep 21
                </span>

                <span className="text-[14px] font-normal">This week</span>
                <span className="text-[24px] font-medium">₦1,652.50</span>
              </div>
              <MiniGraph salesData={weekyData} />
            </div>

            <div className="h-[240px] w-full 2xl:w-[300px] p-4 items-center justify-between border-[1px] border-[#000] flex  gap-2 rounded-[8px] text-[#000]">
              <div className="flex flex-col gap-2 justify-center">
                <span className="text-[14px] font-normal">
                  24 Aug - 01 Sep 21
                </span>

                <span className="text-[14px] font-normal">This Month</span>
                <span className="text-[24px] font-medium">₦1,652.50</span>
              </div>
              <MiniGraph salesData={thisMonthyData} />
            </div>
            <div className="h-[240px] w-full 2xl:w-[300px] p-4 items-center justify-between border-[1px] border-[#000] flex  gap-2 rounded-[8px] text-[#000]">
              <div className="flex flex-col gap-2 justify-center">
                <span className="text-[14px] font-normal">
                  24 Aug - 01 Sep 21
                </span>

                <span className="text-[14px] font-normal">Last Month</span>
                <span className="text-[24px] font-medium">₦1,652.50</span>
              </div>
              <MiniGraph salesData={lastMonthData} />
            </div>
          </>
        ) : (
          <>
            <div className="h-[240px] w-full 2xl:w-[300px] p-4  bg-[#000] flex flex-col gap-2 rounded-[8px] text-[#fff]">
              <span className="text-[14px] font-normal">
                24 Aug - 01 Sep 21
              </span>
              <MiniGraph salesData={weekyData} />
              <span className="text-[14px] font-normal">This week</span>
              <span className="text-[20px] font-medium">₦1,652.50</span>
            </div>
            <div className="h-[240px] w-full 2xl:w-[300px]  p-4 border-[1px] border-[#000] flex flex-col gap-2 rounded-[8px] text-[#000]">
              <span className="text-[14px] font-normal">
                24 Aug - 01 Sep 21
              </span>
              <MiniGraph salesData={thisMonthyData} />
              <span className="text-[14px] font-normal">This month</span>
              <span className="text-[20px] font-medium">₦1,652.50</span>
            </div>
            <div className="h-[240px] w-full 2xl:w-[300px] p-4 border-[1px] border-[#000] flex flex-col gap-2 rounded-[8px] text-[#000]">
              <span className="text-[14px] font-normal">
                24 Aug - 01 Sep 21
              </span>
              <MiniGraph salesData={lastMonthData} />
              <span className="text-[14px] font-normal">Last month</span>
              <span className="text-[20px] font-medium">₦1,652.50</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default SalesWidgets;
