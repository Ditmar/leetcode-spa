import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Chart } from './Chart';

import type { ComponentProps } from 'react';

type ChartSeries = ComponentProps<typeof Chart>['series'][number];

const barSeries: ChartSeries[] = [{ data: [180, 320, 240, 280, 210], label: 'Revenue' }];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const lineSeries: ChartSeries[] = [{ data: [100, 150, 130, 200, 170], label: 'Visitors' }];

const pieSeries: ChartSeries[] = [{ data: [300, 180, 120] }];
const pieLabels = ['Product A', 'Product B', 'Product C'];

describe('Chart — bar', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Chart type="bar" series={barSeries} xAxis={{ labels: xLabels }} title="Revenue chart" />
    );
    expect(getByTestId('chart')).toBeInTheDocument();
  });

  it('has role="img" for accessibility', () => {
    const { getByRole } = render(<Chart type="bar" series={barSeries} title="Revenue chart" />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('renders accessible title', () => {
    const { getByRole } = render(<Chart type="bar" series={barSeries} title="Monthly Revenue" />);
    expect(getByRole('img', { name: 'Monthly Revenue' })).toBeInTheDocument();
  });

  it('renders accessible description when provided', () => {
    const { getByText } = render(
      <Chart
        type="bar"
        series={barSeries}
        title="Revenue"
        description="Revenue data from Jan to May"
      />
    );
    expect(getByText('Revenue data from Jan to May')).toBeInTheDocument();
  });
});

describe('Chart — line', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Chart type="line" series={lineSeries} xAxis={{ labels: xLabels }} title="Visitor trend" />
    );
    expect(getByTestId('chart')).toBeInTheDocument();
  });
});

describe('Chart — pie', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Chart
        type="pie"
        series={pieSeries}
        xAxis={{ labels: pieLabels }}
        title="Product distribution"
      />
    );
    expect(getByTestId('chart')).toBeInTheDocument();
  });
});

describe('Chart — loading state', () => {
  it('renders skeleton when loading=true', () => {
    const { getByTestId, queryByTestId } = render(
      <Chart type="bar" series={barSeries} title="Loading chart" loading />
    );
    expect(getByTestId('chart-skeleton')).toBeInTheDocument();
    expect(queryByTestId('chart')).toBeNull();
  });

  it('renders chart when loading=false', () => {
    const { getByTestId, queryByTestId } = render(
      <Chart type="bar" series={barSeries} title="Revenue chart" loading={false} />
    );
    expect(getByTestId('chart')).toBeInTheDocument();
    expect(queryByTestId('chart-skeleton')).toBeNull();
  });
});

describe('Chart — empty data', () => {
  it('renders bar chart with empty series array without crashing', () => {
    const { getByTestId } = render(<Chart type="bar" series={[]} title="Empty chart" />);
    expect(getByTestId('chart')).toBeInTheDocument();
  });

  it('renders pie chart with no data values without crashing', () => {
    const { getByTestId } = render(<Chart type="pie" series={[{ data: [] }]} title="Empty pie" />);
    expect(getByTestId('chart')).toBeInTheDocument();
  });
});
