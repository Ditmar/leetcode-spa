import { Skeleton } from '@mui/material';

export const ListSkeletonItem = () => (
  <Skeleton variant="rectangular" height={56} animation="wave" />
);

export const CardSkeletonItem = () => <Skeleton variant="rounded" height={180} animation="wave" />;

export const DetailSkeletonItem = () => (
  <>
    <Skeleton variant="text" width="60%" height={40} animation="wave" />
    <Skeleton variant="rectangular" height={240} animation="wave" />
    <Skeleton variant="text" width="100%" animation="wave" />
    <Skeleton variant="text" width="80%" animation="wave" />
  </>
);
