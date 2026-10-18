import { Box, Stack } from '@mui/material';

import { CardSkeletonItem, DetailSkeletonItem, ListSkeletonItem } from './Skeletons.styles';

import type { CardSkeletonProps, DetailSkeletonProps, ListSkeletonProps } from './Skeletons.types';

export const ListSkeleton = ({ count = 5 }: ListSkeletonProps) => (
  <Stack spacing={1} aria-label="Loading list" role="status">
    {Array.from({ length: count }, (_, index) => (
      <ListSkeletonItem key={index} />
    ))}
  </Stack>
);

export const CardSkeleton = ({ count = 3 }: CardSkeletonProps) => (
  <Box
    role="status"
    aria-label="Loading cards"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 2,
    }}
  >
    {Array.from({ length: count }, (_, index) => (
      <CardSkeletonItem key={index} />
    ))}
  </Box>
);

export const DetailSkeleton = ({ showImage = true }: DetailSkeletonProps) => (
  <Stack spacing={1} role="status" aria-label="Loading details">
    {showImage ? (
      <DetailSkeletonItem />
    ) : (
      <>
        <ListSkeletonItem />
        <ListSkeletonItem />
        <ListSkeletonItem />
      </>
    )}
  </Stack>
);
