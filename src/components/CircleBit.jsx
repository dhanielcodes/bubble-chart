export default function CircleBit({
  size,
  label,
  value,
  color,
  titleSize,
  valueSize,
  style,
}) {
  return (
    <>
      <div
        className="tooltip"
        style={{
          textAlign: "center",
          borderRadius: "100000px",
          backgroundColor: color,
          border: `${size / 20}px solid white`,
          width: size + "px",
          height: size + "px",
          color: "white",
          display: "grid",
          placeItems: "center",
          transition: "all 0.4s",
        }}
      >
        <div>
          <div
            style={{
              fontSize: size / 10,
            }}
          >
            {label}
          </div>
          <h2
            style={{
              fontSize: size / 6,
            }}
          >
            {value}
          </h2>
        </div>

        <span className="tooltiptext">Tooltip text</span>
      </div>
    </>
  );
}
