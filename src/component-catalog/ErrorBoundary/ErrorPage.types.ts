export interface ErrorPageProps {
  code: '404' | '500';
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}
