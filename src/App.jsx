import "./App.css";
import CircleBit from "./components/CircleBit";
import CircleChart from "./components/CircleChart";

function App() {
  return (
    <>
      {/*  <CircleBit /> */}

      <CircleChart
        dataList={[
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
          { name: "Hi", value: "yellow" },
        ]}
        dataKey="name"
      />
    </>
  );
}

export default App;
