import {
  ChartContainer,
  BarChart,
  BarItem,
  ChartLabels,
  ChartLabel,
  ChartTitle,
  ChartLegend,
  LegendItem,
  LegendColor,
  LegendLabel,
  PieChart,
  PieSlice,
} from "@/components/complex/Chart";

export const ChartPreview = () => {
  const barData = [
    { label: "1월", value: 65, color: "#4A90E2" },
    { label: "2월", value: 45, color: "#50C878" },
    { label: "3월", value: 80, color: "#E25141" },
    { label: "4월", value: 30, color: "#F5A623" },
    { label: "5월", value: 55, color: "#9013FE" },
  ];

  const pieData = [
    { label: "제품 A", value: 30, color: "#4A90E2" },
    { label: "제품 B", value: 25, color: "#50C878" },
    { label: "제품 C", value: 20, color: "#E25141" },
    { label: "제품 D", value: 15, color: "#F5A623" },
    { label: "제품 E", value: 10, color: "#9013FE" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Bar Chart */}
      <ChartContainer $width="100%" $height={300}>
        <ChartTitle>월별 판매량</ChartTitle>
        <BarChart>
          {barData.map((item, index) => (
            <BarItem
              key={index}
              $height={
                (item.value / Math.max(...barData.map((d) => d.value))) * 100
              }
              $color={item.color}
            />
          ))}
        </BarChart>
        <ChartLabels>
          {barData.map((item, index) => (
            <ChartLabel key={index}>{item.label}</ChartLabel>
          ))}
        </ChartLabels>
        <ChartLegend>
          {barData.map((item, index) => (
            <LegendItem key={index}>
              <LegendColor $color={item.color} />
              <LegendLabel>
                {item.label}: {item.value}%
              </LegendLabel>
            </LegendItem>
          ))}
        </ChartLegend>
      </ChartContainer>

      {/* Pie Chart */}
      <ChartContainer $width="100%" $height={400}>
        <ChartTitle>제품별 점유율</ChartTitle>
        <PieChart>
          {pieData.map((item, index) => {
            const previousValues = pieData
              .slice(0, index)
              .reduce((sum, curr) => sum + curr.value, 0);
            const rotation = (previousValues / 100) * 360;

            return (
              <PieSlice
                key={index}
                $percentage={item.value}
                $color={item.color}
                $rotation={rotation}
              />
            );
          })}
        </PieChart>
        <ChartLegend>
          {pieData.map((item, index) => (
            <LegendItem key={index}>
              <LegendColor $color={item.color} />
              <LegendLabel>
                {item.label}: {item.value}%
              </LegendLabel>
            </LegendItem>
          ))}
        </ChartLegend>
      </ChartContainer>
    </div>
  );
};
