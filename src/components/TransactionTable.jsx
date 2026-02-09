const transactions = [
    { name: "login", size: 0.75, dissatisfaction: 82 },
    { name: "checkout", size: 0.76, dissatisfaction: 61 },
    { name: "addToCart", size: 0.80, dissatisfaction: 40 },
    { name: "purchase", size: 0.85, dissatisfaction: 20 },
    { name: "browse", size: 0.90, dissatisfaction: 1 },
  ];
  
  const TransactionTable = () => {
    return (
      <div className="w-full">
        <div className="grid grid-cols-[1fr_60px_1fr] gap-x-2 px-1 pb-2 border-b border-border">
          <span className="text-[11px] font-semibold tracking-wider text-[#878c92] uppercase">
            Transaction
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-[#878c92] uppercase text-right">
            Size
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-[#878c92] uppercase text-right">
            Dissatisfaction
          </span>
        </div>
        {transactions.map((t, i) => (
          <div
            key={t.name}
            className="grid grid-cols-[1fr_60px_1fr] gap-x-2 px-1 py-2.5 border-b border-border last:border-b-0 items-center"
          >
            <span className="text-sm text-[#22262a]">
              <span className="text-[#878c92]">{i + 1}. </span>
              {t.name}
            </span>
            <span className="text-sm text-[#22262a] text-right font-mono" style={{ fontFamily: "IBM Plex Mono" }}>
              .{String(t.size).split(".")[1]?.padEnd(2, "0")}
            </span>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm text-[#22262a] font-mono min-w-[32px] text-right" style={{ fontFamily: "IBM Plex Mono" }}>
                {t.dissatisfaction}%
              </span>
              <div className="w-[60px] h-[6px] rounded-full bg-[#e3e6e8] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#0073a8]"
                  style={{ width: `${t.dissatisfaction}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TransactionTable;
  