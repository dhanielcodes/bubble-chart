export default function CircleBit({
  size = "130px",
  title = "web",
  value = "194300",
  color = "#9d7ffe",
  left,
  top,
  hierarchy,
  right,
  bottom,
  titleSize,
  valueSize,
}) {
  return (
    <>
      <div
        className="tooltip"
        style={{
          textAlign: "center",
          position: "absolute",
          top: top,
          right: right,
          left: left,
          bottom: bottom,
          borderRadius: "100000px",
          backgroundColor: color,
          border: "4px solid white",
          width: size,
          height: size,
          color: "white",
          display: "grid",
          placeItems: "center",
          transition: "all 0.4s",
          zIndex: hierarchy,
        }}
      >
        <div>
          <div
            style={{
              fontSize: titleSize,
            }}
          >
            {title}
          </div>
          <h2
            style={{
              fontSize: valueSize,
            }}
          >
            value
          </h2>
        </div>

        <span className="tooltiptext">Tooltip text</span>
      </div>
    </>
  );
}
