import DashboardGraph from "./DashboardGraph";
import Dashboardtable from "./DashboardTable";
import { adInsightsArrByCampaign } from "../../data/data";

export default function Dashboard() {
  let clicksTotal = 0;
  let costTotal = 0;
  let conversionsTotal = 0;
  let revenueTotal = 0;
  adInsightsArrByCampaign.map((values) => {
    clicksTotal = clicksTotal + values.clicks;
    costTotal = costTotal + values.cost;
    conversionsTotal = conversionsTotal + values.conversions;
    revenueTotal = revenueTotal + values.revenue;
    console.log(clicksTotal, costTotal, conversionsTotal, revenueTotal);
  });
  return (
    <div className="grid grid-cols-2 w-full gap-4 px-8 py-8 justify-start items-center overflow-clip">
      <Dashboardtable
        data={adInsightsArrByCampaign}
        label="Campaigns"
        clicksTotal={clicksTotal}
        costTotal={costTotal}
        conversionsTotal={conversionsTotal}
        revenueTotal={revenueTotal}
      />
      <DashboardGraph />
    </div>
  );
}
