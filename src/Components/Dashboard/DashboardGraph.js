import { adInsightsArrByGroup } from "../../data/data";
import Dashboardtable from "./DashboardTable";
import { MdOutlineTableChart } from "react-icons/md";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { useState } from "react";
import { PieChart, Pie, Legend } from "recharts";

export default function DashboardGraph() {
  let clicksTotal = 0;
  let costTotal = 0;
  let conversionsTotal = 0;
  let revenueTotal = 0;
  adInsightsArrByGroup.map((values) => {
    clicksTotal = clicksTotal + values.clicks;
    costTotal = costTotal + values.cost;
    conversionsTotal = conversionsTotal + values.conversions;
    revenueTotal = revenueTotal + values.revenue;
    console.log(clicksTotal, costTotal, conversionsTotal, revenueTotal);
  });
  const [graphView, setGraphView] = useState(true);
  return (
    <div className="flex flex-col justify-between">
      {graphView === true ? (
        <>
          <PieChart width={800} height={400}>
            <Legend
              height={36}
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              iconSize={10}
              values="label"
              padding={5}
            />
            <Pie
              data={adInsightsArrByGroup}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="fill"
              paddingAngle={0}
              dataKey="cost"
            />
          </PieChart>
        </>
      ) : (
        <>
          <Dashboardtable
            data={adInsightsArrByGroup}
            label="Group"
            clicksTotal={clicksTotal}
            costTotal={costTotal}
            conversionsTotal={conversionsTotal}
            revenueTotal={revenueTotal}
          />
        </>
      )}
      <div className="flex justify-end items-end w-full">
        <span
          className={`flex flex-row justify-end items-center w-fit gap-2 ${
            graphView === true ? "pl-2" : "pr-2"
          } py-0.5 rounded-full bg-[#c8c7c7]`}
        >
          <MdOutlineTableChart
            size={30}
            onClick={() => setGraphView(false)}
            className={
              graphView === false
                ? "block bg-blue-400 rounded-full w-[30px] h-[30px] p-1"
                : ""
            }
          />
          <BiSolidDoughnutChart
            size={30}
            onClick={() => setGraphView(true)}
            className={
              graphView === true
                ? "block bg-blue-400 rounded-full w-[30px] h-[30px] p-1"
                : ""
            }
          />
        </span>
      </div>
    </div>
  );
}
