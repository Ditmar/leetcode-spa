import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useId, useMemo  } from 'react';

import { DEFAULT_CHART_HEIGHT, SERIES_COLORS } from './Chart.constants';
import { ChartWrapper, ChartSkeleton, VisuallyHidden } from './Chart.styles';

import type { ChartProps } from './Chart.types';
import { useTheme } from '../../style-library';

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
  const theme = useTheme();
  const axisFontSize = theme.typography.caption.fontSize;
  const titleId = useId();
  const descId = useId();

  if (loading) {
    return (
      <ChartWrapper sx={sx} data-testid="chart-skeleton">
        <ChartSkeleton variant="rectangular" width="100%" height={height} />
      </ChartWrapper>
    );
  }

const legendSlots = useMemo(
  () => (showLegend ? undefined : { legend: HiddenLegend }),
  [showLegend],
);

  const xAxisConfig =useMemo(() => xAxis?.labels
    ? [
        {
          scaleType: 'band' as const,
          data: xAxis.labels,
          label: xAxis.title,
          tickLabelStyle: { fontSize: axisFontSize },
        },
      ]
    : undefined,
    [xAxis, axisFontSize]
    );

  const yAxisConfig = useMemo(() => yAxis?.title
    ? [{ label: yAxis.title, tickLabelStyle: { fontSize: axisFontSize } }]
    : undefined,
    [xAxis, axisFontSize]
    );

  const normalisedSeries = useMemo(() => series.map((s, i) => ({
    data: s.data,
    label: s.label,
    color: s.color ?? SERIES_COLORS[i % SERIES_COLORS.length],
  })),
  [series],);

  const pieSeries = useMemo(
  () => [
    {
      data:
        series[0]?.data.map((value, i) => ({
          id: i,
          value,
          label: xAxis?.labels?.[i] ?? `Item ${i + 1}`,
          color: SERIES_COLORS[i % SERIES_COLORS.length],
        })) ?? [],
    },
  ],
  [series, xAxis],
);

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

      {type === 'pie' && <PieChart series={pieSeries} height={height} slots={legendSlots} />}
    </ChartWrapper>
  );
};

export { Chart };
