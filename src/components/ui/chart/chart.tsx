import React from "react";
import styled from "styled-components";

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartProps {
  data: ChartDataPoint[];
  type?: "bar" | "line" | "pie";
  width?: string | number;
  height?: string | number;
  showLabels?: boolean;
  showValues?: boolean;
}

const ChartContainer = styled.div<{
  $width?: string | number;
  $height?: string | number;
}>`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background}20;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;

  ${({ $width }) =>
    $width &&
    (typeof $width === "number" ? `width: ${$width}px;` : `width: ${$width};`)}
  ${({ $height }) =>
    $height &&
    (typeof $height === "number"
      ? `height: ${$height}px;`
      : `height: ${$height};`)}
`;

const BarChart = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 200px;
`;

const BarItem = styled.div<{ $height: number; $color?: string }>`
  flex: 1;
  background-color: ${({ $color, theme }) => $color || theme.colors.primary};
  border-radius: 4px 4px 0 0;
  min-width: 20px;
  height: ${({ $height }) => $height}%;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ChartLabels = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const ChartLabel = styled.div`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.lightGray};
  min-width: 20px;
`;

const ChartLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LegendColor = styled.div<{ $color?: string }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${({ $color, theme }) => $color || theme.colors.primary};
`;

const LegendLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PieChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const PieSlice = styled.div<{
  $percentage: number;
  $color?: string;
  $rotation: number;
}>`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    ${({ $color, theme }) => $color || theme.colors.primary} 0%
      ${({ $percentage }) => `${$percentage}%`},
    transparent ${({ $percentage }) => $percentage}% 100%
  );
  transform: rotate(${({ $rotation }) => $rotation}deg);
`;

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  (
    {
      data,
      type = "bar",
      width = "100%",
      height,
      showLabels = true,
      showValues = false,
    },
    ref
  ) => {
    const maxValue = Math.max(...data.map((item) => item.value));

    const getDefaultColor = (index: number) => {
      const colors = [
        "#007bff",
        "#28a745",
        "#ffc107",
        "#dc3545",
        "#6c757d",
        "#17a2b8",
      ];
      return colors[index % colors.length];
    };

    const renderBarChart = () => {
      return (
        <>
          <BarChart>
            {data.map((item, index) => (
              <BarItem
                key={item.label}
                $height={(item.value / maxValue) * 100}
                $color={item.color || getDefaultColor(index)}
                title={`${item.label}: ${item.value}`}
              />
            ))}
          </BarChart>
          {showLabels && (
            <ChartLabels>
              {data.map((item) => (
                <ChartLabel key={item.label}>
                  {item.label}
                  {showValues && <div>{item.value}</div>}
                </ChartLabel>
              ))}
            </ChartLabels>
          )}
        </>
      );
    };

    const renderPieChart = () => {
      const total = data.reduce((sum, item) => sum + item.value, 0);
      let currentRotation = 0;

      return (
        <>
          <PieChart>
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const slice = (
                <PieSlice
                  key={item.label}
                  $percentage={percentage}
                  $color={item.color || getDefaultColor(index)}
                  $rotation={currentRotation}
                />
              );
              currentRotation += (percentage / 100) * 360;
              return slice;
            })}
          </PieChart>
          <ChartLegend>
            {data.map((item, index) => (
              <LegendItem key={item.label}>
                <LegendColor $color={item.color || getDefaultColor(index)} />
                <LegendLabel>
                  {item.label}
                  {showValues && ` (${item.value})`}
                </LegendLabel>
              </LegendItem>
            ))}
          </ChartLegend>
        </>
      );
    };

    const renderChart = () => {
      switch (type) {
        case "pie":
          return renderPieChart();
        case "line":
        case "bar":
        default:
          return renderBarChart();
      }
    };

    return (
      <ChartContainer ref={ref} $width={width} $height={height}>
        {renderChart()}
      </ChartContainer>
    );
  }
);
