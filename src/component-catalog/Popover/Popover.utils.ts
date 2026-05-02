import type { PopoverPlacement } from './Popover.types';
import type { PopoverOrigin } from '@mui/material/Popover';

interface PopoverOrigins {
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
}

interface FlipPlacementParams {
  placement: PopoverPlacement;
  anchorRect: DOMRect;
  popoverWidth: number;
  popoverHeight: number;
  viewportWidth: number;
  viewportHeight: number;
}

export const getPopoverOrigins = (placement: PopoverPlacement): PopoverOrigins => {
  const [side, alignment] = placement.split('-') as [
    'top' | 'bottom' | 'left' | 'right',
    'start' | 'end' | undefined,
  ];

  if (side === 'top') {
    return {
      anchorOrigin: {
        vertical: 'top',
        horizontal: alignment === 'start' ? 'left' : alignment === 'end' ? 'right' : 'center',
      },
      transformOrigin: {
        vertical: 'bottom',
        horizontal: alignment === 'start' ? 'left' : alignment === 'end' ? 'right' : 'center',
      },
    };
  }

  if (side === 'bottom') {
    return {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: alignment === 'start' ? 'left' : alignment === 'end' ? 'right' : 'center',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: alignment === 'start' ? 'left' : alignment === 'end' ? 'right' : 'center',
      },
    };
  }

  if (side === 'left') {
    return {
      anchorOrigin: {
        vertical: alignment === 'start' ? 'top' : alignment === 'end' ? 'bottom' : 'center',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: alignment === 'start' ? 'top' : alignment === 'end' ? 'bottom' : 'center',
        horizontal: 'right',
      },
    };
  }

  return {
    anchorOrigin: {
      vertical: alignment === 'start' ? 'top' : alignment === 'end' ? 'bottom' : 'center',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: alignment === 'start' ? 'top' : alignment === 'end' ? 'bottom' : 'center',
      horizontal: 'left',
    },
  };
};

export const getOppositePlacement = (placement: PopoverPlacement): PopoverPlacement => {
  const [side, alignment] = placement.split('-') as [
    'top' | 'bottom' | 'left' | 'right',
    'start' | 'end' | undefined,
  ];

  const suffix = alignment ? `-${alignment}` : '';

  if (side === 'top') return `bottom${suffix}` as PopoverPlacement;
  if (side === 'bottom') return `top${suffix}` as PopoverPlacement;
  if (side === 'left') return `right${suffix}` as PopoverPlacement;

  return `left${suffix}` as PopoverPlacement;
};

export const getAutoFlippedPlacement = ({
  placement,
  anchorRect,
  popoverWidth,
  popoverHeight,
  viewportWidth,
  viewportHeight,
}: FlipPlacementParams): PopoverPlacement => {
  const side = placement.split('-')[0];

  const hasSpaceTop = anchorRect.top >= popoverHeight;
  const hasSpaceBottom = viewportHeight - anchorRect.bottom >= popoverHeight;
  const hasSpaceLeft = anchorRect.left >= popoverWidth;
  const hasSpaceRight = viewportWidth - anchorRect.right >= popoverWidth;

  if (side === 'top' && !hasSpaceTop && hasSpaceBottom) {
    return getOppositePlacement(placement);
  }

  if (side === 'bottom' && !hasSpaceBottom && hasSpaceTop) {
    return getOppositePlacement(placement);
  }

  if (side === 'left' && !hasSpaceLeft && hasSpaceRight) {
    return getOppositePlacement(placement);
  }

  if (side === 'right' && !hasSpaceRight && hasSpaceLeft) {
    return getOppositePlacement(placement);
  }

  return placement;
};

export const getArrowSide = (placement: PopoverPlacement) => {
  const side = placement.split('-')[0];

  if (side === 'top') return 'bottom';
  if (side === 'bottom') return 'top';
  if (side === 'left') return 'right';

  return 'left';
};
