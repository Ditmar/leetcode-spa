import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Chart } from './Chart';

const barSeries = [{ data: [180, 320, 240, 280, 210], label: 'Revenue' }];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const lineSeries = [{ data: [100, 150, 130, 200, 170], label: 'Visitors' }];

const pieSeries = [{ data: [300, 180, 120] }];
const pieLabels = ['Product A', 'Product B', 'Product C'];

describe('Chart — bar', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Chart type="bar" series={barSeries} xAxis={{ labels: xLabels }} title="Revenue chart" />
    );
    expect(getByTestId('chart')).toBeTruthy();
  });

  it('has role="img" for accessibility', () => {
    const { getByRole } = render(<Chart type="bar" series={barSeries} title="Revenue chart" />);
    expect(getByRole('img')).toBeTruthy();
  });

  it('renders accessible title', () => {
    const { getByText } = render(<Chart type="bar" series={barSeries} title="Monthly Revenue" />);
    expect(getByText('Monthly Revenue')).toBeTruthy();
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
    expect(getByText('Revenue data from Jan to May')).toBeTruthy();
  });
});

describe('Chart — line', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Chart type="line" series={lineSeries} xAxis={{ labels: xLabels }} title="Visitor trend" />
    );
    expect(getByTestId('chart')).toBeTruthy();
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
    expect(getByTestId('chart')).toBeTruthy();
  });
});

describe('Chart — loading state', () => {
  it('renders skeleton when loading=true', () => {
    const { getByTestId, queryByTestId } = render(
      <Chart type="bar" series={barSeries} title="Loading chart" loading />
    );
    expect(getByTestId('chart-skeleton')).toBeTruthy();
    expect(queryByTestId('chart')).toBeNull();
  });

  it('renders chart when loading=false', () => {
    const { getByTestId, queryByTestId } = render(
      <Chart type="bar" series={barSeries} title="Revenue chart" loading={false} />
    );
    expect(getByTestId('chart')).toBeTruthy();
    expect(queryByTestId('chart-skeleton')).toBeNull();
  });
});

describe('Chart — empty data', () => {
  it('renders bar chart with empty series array without crashing', () => {
    const { getByTestId } = render(<Chart type="bar" series={[]} title="Empty chart" />);
    expect(getByTestId('chart')).toBeTruthy();
  });

  it('renders pie chart with no data values without crashing', () => {
    const { getByTestId } = render(<Chart type="pie" series={[{ data: [] }]} title="Empty pie" />);
    expect(getByTestId('chart')).toBeTruthy();
  });
});
