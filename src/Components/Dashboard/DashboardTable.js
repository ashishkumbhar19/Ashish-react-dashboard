import { tocurrency } from "../../utils/utilities";

export default function Dashboardtable(props) {
  return (
    <div className="flex flex-col border-2 my-4 py-2 border-[#C0C0C0] shadow font-primary">
      <span className="text-base text-[#4F4F4F] px-2 py-1 border-b-[2px] border-[#C0C0C0]">
        Ad Insights
      </span>
      <table className="flex flex-col justify-start items-start w-full py-2 text-base text-[#4F4F4F]">
        <tr className="grid grid-cols-5 gap-2 w-full border-b-[2px] border-[#C0C0C0]">
          <th className="flex justify-center">{props.label}</th>
          <th className="flex justify-center">Clicks</th>
          <th className="flex justify-center">Cost</th>
          <th className="flex justify-center">Conversions</th>
          <th className="flex justify-center">Revenue</th>
        </tr>
        <tr className="w-full">
          {props.data.map((values) => (
            <span className="grid grid-cols-5 gap-2 py-1.5 border-b-[0.5px] border-[#C0C0C0] font-extralight">
              <td className="flex justify-center">{values.label}</td>
              <td className="flex justify-center">{values.clicks}</td>
              <td className="flex justify-center">{tocurrency(values.cost)}</td>
              <td className="flex justify-center">{values.conversions}</td>
              <td className="flex justify-center">
                {tocurrency(values.revenue)}
              </td>
            </span>
          ))}
        </tr>
        <tr className="w-full">
          <span className="grid grid-cols-5 gap-2 pt-1.5 font-extralight">
            <td className="flex justify-center">Total</td>
            <td className="flex justify-center">{props.clicksTotal}</td>
            <td className="flex justify-center">{tocurrency(props.costTotal)}</td>
            <td className="flex justify-center">{props.conversionsTotal}</td>
            <td className="flex justify-center">{tocurrency(props.revenueTotal)}</td>
          </span>
        </tr>
      </table>
    </div>
  );
}
