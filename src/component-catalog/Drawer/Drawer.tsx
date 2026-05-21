import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer as MuiDrawer, IconButton, SwipeableDrawer, Typography } from '@mui/material';

import { DRAWER_ANCHORS, DRAWER_VARIANTS } from './Drawer.constants';
import { useDrawer } from './Drawer.hook';
import {
  drawerContentSx,
  drawerDescriptionSx,
  drawerDragIndicatorContainerSx,
  drawerDragIndicatorSx,
  drawerHeaderSx,
  drawerPaperSx,
  drawerTitleSx,
} from './Drawer.styles';
import { isBottomDrawer, isHorizontalDrawer } from './Drawer.utils';

import type { CustomDrawerProps } from './Drawer.types';

const Drawer = (props: CustomDrawerProps) => {
  const {
    anchor = DRAWER_ANCHORS.RIGHT,
    variant = DRAWER_VARIANTS.TEMPORARY,
    open = false,
    onClose,
    onOpen,
    title,
    description,
    children,
    showCloseButton = true,
    showDragHandle = true,
    drawerSize,
    swipeable = true,
    drawerAriaLabel = 'drawer',
    ...rest
  } = props;

  const { isMobile } = useDrawer();

  const handleCloseButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose(event, 'escapeKeyDown');
    }
  };

  const paperSx = drawerPaperSx(anchor, drawerSize);

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Pill indicator para bottom — encima del título */}
      {isBottomDrawer(anchor) && showDragHandle && (
        <Box sx={drawerDragIndicatorContainerSx}>
          <Box sx={drawerDragIndicatorSx} aria-hidden="true" />
        </Box>
      )}

      {(title || description) && (
        <Box sx={drawerHeaderSx}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box>
              {title && (
                <Typography component="h2" sx={drawerTitleSx}>
                  {title}
                </Typography>
              )}
              {description && (
                <Typography component="p" sx={drawerDescriptionSx}>
                  {description}
                </Typography>
              )}
            </Box>

            {/* X button solo en left y right */}
            {isHorizontalDrawer(anchor) && showCloseButton && (
              <IconButton aria-label="close drawer" onClick={handleCloseButtonClick}>
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      )}

      <Box sx={drawerContentSx}>{children}</Box>

      {/* Pill indicator para top — al fondo del panel */}
      {anchor === DRAWER_ANCHORS.TOP && showDragHandle && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: (theme) => theme.spacing(1),
            paddingBottom: (theme) => theme.spacing(1.5),
            marginTop: 'auto',
          }}
        >
          <Box sx={drawerDragIndicatorSx} aria-hidden="true" />
        </Box>
      )}
    </Box>
  );

  if (isMobile && swipeable && variant === DRAWER_VARIANTS.TEMPORARY) {
    return (
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={(event) => onClose?.(event as React.SyntheticEvent, 'escapeKeyDown')}
        onOpen={onOpen ?? (() => {})}
        PaperProps={{ sx: paperSx }}
        aria-label={drawerAriaLabel}
        {...rest}
      >
        {drawerContent}
      </SwipeableDrawer>
    );
  }

  return (
    <MuiDrawer
      anchor={anchor}
      variant={variant}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: paperSx }}
      aria-label={drawerAriaLabel}
      role={
        variant === DRAWER_VARIANTS.TEMPORARY ? undefined : 'complementary'
      }
      {...rest}
    >
      {drawerContent}
    </MuiDrawer>
  );
};

export { Drawer };
