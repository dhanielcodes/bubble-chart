import CircleBit from "./CircleBit";

export default function CircleChart({ dataList = [] }) {
  const cric = dataList
    ?.map((item) => {
      return {
        ...item,
        name2: item?.name2?.toUpperCase(),
      };
    })
    .sort((a, b) => a.value - b.value)
    ?.reverse();

  return cric?.map((item) => {
    return <CircleBit key={item} position />;
  });
}
