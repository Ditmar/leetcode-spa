import { useId } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

import { ChartWrapper, ChartSkeleton, VisuallyHidden } from './Chart.styles';
import { DEFAULT_CHART_HEIGHT, SERIES_COLORS, AXIS_TICK_FONT_SIZE } from './Chart.constants';
import type { ChartProps } from './Chart.types';

const HiddenLegend = () => null;


const Chart = (props: ChartProps) => {
  const {
    type,
    series,
    xAxis,
    yAxis,
    title,
    description,
    showLegend = true,
    height = DEFAULT_CHART_HEIGHT,
    loading = false,
    sx,
  } = props;

  const titleId = useId();
  const descId = useId();

  if (loading) {
    return (
      <ChartWrapper sx={sx} data-testid="chart-skeleton">
        <ChartSkeleton variant="rectangular" width="100%" height={height} />
      </ChartWrapper>
    );
  }

  const legendSlots = showLegend ? undefined : { legend: HiddenLegend };

  const xAxisConfig = xAxis?.labels
    ? [
        {
          scaleType: 'band' as const,
          data: xAxis.labels,
          label: xAxis.title,
          tickLabelStyle: { fontSize: AXIS_TICK_FONT_SIZE },
        },
      ]
    : undefined;

  const yAxisConfig = yAxis?.title
    ? [{ label: yAxis.title, tickLabelStyle: { fontSize: AXIS_TICK_FONT_SIZE } }]
    : undefined;

  const normalisedSeries = series.map((s, i) => ({
    data: s.data,
    label: s.label,
    color: s.color ?? SERIES_COLORS[i % SERIES_COLORS.length],
  }));

  const pieSeries = [
    {
      data:
        series[0]?.data.map((value, i) => ({
          id: i,
          value,
          label: xAxis?.labels?.[i] ?? `Item ${i + 1}`,
          color: SERIES_COLORS[i % SERIES_COLORS.length],
        })) ?? [],
    },
  ];

  return (
    <ChartWrapper
      type={type}
      role="img"
      aria-labelledby={titleId}
      aria-describedby={description ? descId : undefined}
      sx={sx}
      data-testid="chart"
    >
      <VisuallyHidden id={titleId}>{title}</VisuallyHidden>
      {description && <VisuallyHidden id={descId}>{description}</VisuallyHidden>}

      {type === 'bar' && (
        <BarChart
          series={normalisedSeries}
          xAxis={xAxisConfig}
          yAxis={yAxisConfig}
          height={height}
          slots={legendSlots}
        />
      )}

      {type === 'line' && (
        <LineChart
          series={normalisedSeries}
          xAxis={xAxisConfig}
          yAxis={yAxisConfig}
          height={height}
          slots={legendSlots}
        />
      )}

      {type === 'pie' && (
        <PieChart
          series={pieSeries}
          height={height}
          slots={legendSlots}
        />
      )}
    </ChartWrapper>
  );
};

export { Chart };
