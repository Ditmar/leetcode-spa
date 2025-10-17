import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import '@testing-library/jest-dom';

import ThankYouMessage from './ThankYouMessage';

describe('ThankYouMessage', () => {
  it('renders default title, message and illustration', () => {
    const { getByTestId } = render(<ThankYouMessage />);
    expect(getByTestId('thank-you-title')).toHaveTextContent('Thanks For Participating');
    expect(getByTestId('thank-you-message')).toHaveTextContent('Your Test Has Completed!');
    expect(getByTestId('thank-you-illustration')).toBeInTheDocument();
    expect(getByTestId('thank-you-notification')).toHaveTextContent(
      'You will be notified when your test results are released'
    );
  });

  it('renders custom title, message and illustration', () => {
    const CustomIllustration = <div data-testid="custom-illustration" />;
    const { getByTestId } = render(
      <ThankYouMessage
        title="Custom Title"
        message="Custom Message"
        illustration={CustomIllustration}
      />
    );
    expect(getByTestId('thank-you-title')).toHaveTextContent('Custom Title');
    expect(getByTestId('thank-you-message')).toHaveTextContent('Custom Message');
    expect(getByTestId('custom-illustration')).toBeInTheDocument();
    expect(getByTestId('thank-you-notification')).toHaveTextContent(
      'You will be notified when your test results are released'
    );
  });

  it('hides notification when showNotification is false', () => {
    const { queryByTestId } = render(<ThankYouMessage showNotification={false} />);
    expect(queryByTestId('thank-you-notification')).toBeNull();
  });

  it('renders custom notification text', () => {
    const { getByTestId } = render(<ThankYouMessage notificationText="Custom notify" />);
    expect(getByTestId('thank-you-notification')).toHaveTextContent('Custom notify');
  });
});
