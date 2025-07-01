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

export const ChartContainer = styled.div<{
  $width?: string | number;
  $height?: string | number;
}>`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background.secondary}20;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.medium};

  ${({ $width }) =>
    $width &&
    (typeof $width === "number" ? `width: ${$width}px;` : `width: ${$width};`)}
  ${({ $height }) =>
    $height &&
    (typeof $height === "number"
      ? `height: ${$height}px;`
      : `height: ${$height};`)}
`;

export const BarChart = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 200px;
`;

export const BarItem = styled.div<{ $height: number; $color?: string }>`
  flex: 1;
  background-color: ${({ $color, theme }) => $color || theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius} 0 0;
  min-width: 20px;
  height: ${({ $height }) => $height}%;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ChartLabels = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const ChartLabel = styled.div`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  min-width: 20px;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const ChartLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LegendColor = styled.div<{ $color?: string }>`
  width: 12px;
  height: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ $color, theme }) => $color || theme.colors.primary};
`;

export const LegendLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const ChartTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.medium} 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const PieChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export const PieSlice = styled.div<{
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
      ${({ $percentage }) => $percentage}%,
    transparent ${({ $percentage }) => $percentage}% 100%
  );
  transform: rotate(${({ $rotation }) => $rotation}deg);
`;
