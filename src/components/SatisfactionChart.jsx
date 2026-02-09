import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    ReferenceDot,
    ReferenceLine,
    Tooltip,
  } from "recharts";
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
  
    return (
      <div
        className="border border-border bg-card px-3 py-1.5 shadow-md"
        style={{ fontFamily: "IBM Plex Sans" }}
      >
        <p className="text-xs text-[#878c92]">{label}</p>
        <p className="text-sm font-medium text-[#22262a]">
          {payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  };
  
  const SatisfactionChart = ({ data, currentMonth }) => {
    if (!data || data.length === 0) return null;
  
    const currentIndex = currentMonth
      ? data.findIndex(d => d.date === currentMonth)
      : data.length - 1;
  
    const safeIndex = currentIndex >= 0 ? currentIndex : data.length - 1;
  
    const combinedData = data.map((d, i) => ({
      ...d,
      past: i <= safeIndex ? d.score : null,
      future: i >= safeIndex ? d.score : null,
    }));
  
    const currentPoint = data[safeIndex];
  
    const formattedScore = `.${
      String(currentPoint.score).split(".")[1]?.padEnd(2, "0") || "00"
    }`;
  
    const minScore = Math.min(...data.map(d => d.score));
    const domainMin = Math.floor((minScore - 0.03) * 100) / 100;
  
    return (
      <div className="relative h-[100px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={combinedData}
            margin={{ top: 15, right: 40, bottom: 0, left: 10 }}
          >
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{
                fontSize: 10,
                fill: "#878c92",
                fontFamily: "IBM Plex Sans",
              }}
            />
  
            <YAxis domain={[domainMin, 1]} hide />
  
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#878c92",
                strokeDasharray: "3 3",
              }}
            />
  
            {/* Past line */}
            <Line
              type="monotone"
              dataKey="past"
              stroke="#1daf8d"
              strokeWidth={2}
              dot={false}
              connectNulls={false}
              animationDuration={800}
              animationEasing="ease-in-out"
            />
  
            {/* Future line */}
            <Line
              type="monotone"
              dataKey="future"
              stroke="#1daf8d"
              strokeWidth={2}
              strokeOpacity={0.1}
              dot={false}
              connectNulls={false}
              animationDuration={800}
              animationEasing="ease-in-out"
            />
  
            {/* Current month reference */}
            {currentMonth && (
              <ReferenceLine
                x={currentMonth}
                stroke="#878c92"
                strokeDasharray="3 3"
                strokeWidth={1}
              />
            )}
  
            <ReferenceDot
              x={currentPoint.date}
              y={currentPoint.score}
              r={4}
              fill="#1daf8d"
              stroke="#1daf8d"
            />
          </LineChart>
        </ResponsiveContainer>
  
        <span
          className="absolute text-sm font-medium"
          style={{
            top: "6px",
            right: "2px",
            color: "#1daf8d",
            fontFamily: "IBM Plex Sans",
          }}
        >
          {formattedScore}
        </span>
      </div>
    );
  };
  
  export default SatisfactionChart;
  