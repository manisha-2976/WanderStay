import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export const Chart = ({chartData}) => {
  const total = chartData.reduce((sum, e) => sum + e.revenue, 0);

  return (
    <div>
      <div className="mb-2">
        <small className="text-muted">Earnings</small>
        <h5 className="mb-0">
          &#8377;{total.toLocaleString("en-IN")}
        </h5>
      </div>

      {/* Mini Chart */}
      <div className="">
        <ResponsiveContainer width="100%" height={90}>
          <LineChart data={chartData}>

            <XAxis
              dataKey="month"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              formatter={(value) => `₹${value.toLocaleString("en-IN")}`}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3867ffff"
              strokeWidth={2}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>
      </div>

    </div>
  );
};