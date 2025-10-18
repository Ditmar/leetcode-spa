export interface IProps {
  title?: string;
  message?: string;
  illustration?: string | React.ReactNode;
  showNotification?: boolean;
  notificationText?: string;
  className?: string;
  'data-testid'?: string;
}
