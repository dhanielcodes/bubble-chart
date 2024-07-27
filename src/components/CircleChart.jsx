import CircleBit from "./CircleBit";

export default function CircleChart({
  dataList = [],
  dataKey = "label",
  dataValue = "value",
  size = 750,
  circleRows = 4,
}) {
  const cric = dataList
    ?.map((item) => {
      return {
        ...item,
        [dataKey]: item?.[dataKey]?.toUpperCase(),
      };
    })
    .sort((a, b) => a?.[dataValue] - b?.[dataValue])
    ?.reverse();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${circleRows},${size / circleRows - 8}px)`,
        gridTemplateRows: `repeat(${circleRows},${size / circleRows + 4}px)`,
        width: size - 8 + "px",
        height: size + 26 + "px",
        color: "#fff",
        border: "1px solid #fff",
      }}
    >
      {cric?.map((item) => {
        return (
          <CircleBit
            label={item?.[dataKey]}
            value={item?.[dataValue]}
            key={item}
            size={size / circleRows}
            color={"#9d7ffe"}
          />
        );
      })}
    </div>
  );
}
