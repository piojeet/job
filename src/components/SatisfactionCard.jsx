import { useMemo } from "react";
import { Info } from "lucide-react";
import SatisfactionChart from "./SatisfactionChart";
import TransactionTable from "./TransactionTable";

const chartData = [
    { date: "Jan", score: 0.82 },
    { date: "Feb", score: 0.85 },
    { date: "Mar", score: 0.83 },
    { date: "Apr", score: 0.88 },
    { date: "May", score: 0.86 },
    { date: "Jun", score: 0.90 },
    { date: "Jul", score: 0.89 },
    { date: "Aug", score: 0.91 },
    { date: "Sep", score: 0.93 },
    { date: "Oct", score: 0.95 },
    { date: "Nov", score: 0.94 },
    { date: "Dec", score: 0.97 },
  ];

  const CURRENT_MONTH = "Feb";

const transactions = [
  { name: "login", size: 0.75, dissatisfaction: 82 },
  { name: "checkout", size: 0.76, dissatisfaction: 61 },
  { name: "addToCart", size: 0.80, dissatisfaction: 40 },
  { name: "purchase", size: 0.85, dissatisfaction: 20 },
  { name: "browse", size: 0.90, dissatisfaction: 1 },
];

const TOTAL_TRANSACTIONS = 12;

const SatisfactionCard = () => {
  const latestScore = chartData[chartData.length - 1].score;

  const formattedScore = `.${
    String(latestScore).split(".")[1]?.padEnd(2, "0") || "00"
  }`;

  const satisfiedCount = useMemo(() => {
    return transactions.filter(t => t.dissatisfaction < 50).length;
  }, []);

  const monitoredCount = transactions.length;

  return (
    <div className="bg-card text-card-foreground w-full shadow-sm border border-border rounded-md">
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-1.5 mb-4">
          <h2 className="text-gray-900 text-lg font-semibold">
            Satisfaction Score
          </h2>
          <Info className="w-3.5 h-3.5 text-muted-foreground" />
        </div>

        {/* Score */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex flex-col items-center w-full sm:w-auto sm:max-w-md">
            <span
              className="text-5xl font-semibold text-[#22262a] leading-none"
              style={{ fontFamily: "IBM Plex Sans" }}
            >
              {formattedScore}
            </span>
            <span className="text-xs text-[#878c92] mt-1">
              Average
            </span>
          </div>

          {/* Chart */}
          <div className="flex-1 min-w-0 w-full">
            <SatisfactionChart data={chartData} currentMonth={CURRENT_MONTH} />
          </div>
        </div>

        {/* Transaction progress */}
        <div className="mt-3 flex items-center gap-2">
          <div className="relative w-[180px] h-[4px] rounded-sm bg-[#e3e6e8] overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-sm bg-[#1daf8d] transition-all duration-500 ease-in-out"
              style={{
                width: `${(monitoredCount / TOTAL_TRANSACTIONS) * 100}%`,
              }}
            />
          </div>
          <span className="text-[11px] text-muted-foreground">
            {monitoredCount}/{TOTAL_TRANSACTIONS} transactions
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Table */}
      <div className="px-5 py-4">
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
};

export default SatisfactionCard;
