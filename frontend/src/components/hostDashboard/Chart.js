import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import axios from "axios";

export const Chart = () => {

  const [earnings, setEarnings] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const res = await axios.get(
        "http://localhost:3001/host/monthly-earnings",
        { withCredentials: true }
      );

      setEarnings(res.data);
    };

    fetchData();

  }, []);

  const total = earnings.reduce((sum, e) => sum + e.revenue, 0);

  return (

    <div className="">

      {/* Header */}
      <div className="mb-2">

        <small className="text-muted">Earnings</small>

        <h5 className="mb-0">
          ₹{total.toLocaleString("en-IN")}
        </h5>

      </div>

      {/* Mini Chart */}

      <ResponsiveContainer width="100%" height={90}>

        <LineChart data={earnings}>

          <XAxis
            dataKey="month"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value)=>`₹${value.toLocaleString("en-IN")}`}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#FF385C"
            strokeWidth={2}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};