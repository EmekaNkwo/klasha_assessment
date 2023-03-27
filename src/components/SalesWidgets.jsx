import React, { useEffect, useState } from "react";
import {
  lastMonthChartData,
  thisMonthChartData,
  weeklyChartData,
} from "../shared/constants";
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
  return (
    <div>
      <div className="flex gap-[3rem] flex-col lg:flex-row flex-wrap">
        <div className="h-[240px] w-full lg:w-[300px] p-4 border-[1px] border-[#000] flex flex-col gap-2 rounded-[8px]">
          <span className="text-[14px] font-normal">Today's Sales</span>
          <span className="text-[20px] font-medium">₦1,652.50</span>
        </div>
        <div className="h-[240px] w-full lg:w-[300px]  p-4  bg-[#000] flex flex-col gap-2 rounded-[8px] text-[#fff]">
          <span className="text-[14px] font-normal">24 Aug - 01 Sep 21</span>
          <MiniGraph salesData={weekyData} />
          <span className="text-[14px] font-normal">This week</span>
          <span className="text-[20px] font-medium">₦1,652.50</span>
        </div>
        <div className="h-[240px] w-full lg:w-[300px]  p-4 border-[1px] border-[#000] flex flex-col gap-2 rounded-[8px] text-[#000]">
          <span className="text-[14px] font-normal">24 Aug - 01 Sep 21</span>
          <MiniGraph salesData={thisMonthyData} />
          <span className="text-[14px] font-normal">This month</span>
          <span className="text-[20px] font-medium">₦1,652.50</span>
        </div>
        <div className="h-[240px] w-full lg:w-[300px]  p-4 border-[1px] border-[#000] flex flex-col gap-2 rounded-[8px] text-[#000]">
          <span className="text-[14px] font-normal">24 Aug - 01 Sep 21</span>
          <MiniGraph salesData={lastMonthData} />
          <span className="text-[14px] font-normal">Last month</span>
          <span className="text-[20px] font-medium">₦1,652.50</span>
        </div>
      </div>
    </div>
  );
});

export default SalesWidgets;
