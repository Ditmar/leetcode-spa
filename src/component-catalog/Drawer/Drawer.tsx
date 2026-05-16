import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer as MuiDrawer, IconButton, SwipeableDrawer, Typography } from '@mui/material';

import { DRAWER_ANCHORS, DRAWER_VARIANTS } from './Drawer.constants';
import { useDrawer } from './Drawer.hook';
import {
  dragHandleContainerSx,
  dragHandleSx,
  drawerContentSx,
  drawerDescriptionSx,
  drawerHeaderSx,
  drawerPaperSx,
  drawerTitleSx,
  drawerDragIndicatorContainerSx,
  drawerDragIndicatorSx,
} from './Drawer.styles';

import type { CustomDrawerProps } from './Drawer.types';

const Drawer = (props: CustomDrawerProps) => {
  const {
    anchor = DRAWER_ANCHORS.RIGHT,
    variant = DRAWER_VARIANTS.TEMPORARY,
    open = false,
    onClose,
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

  const handleDrawerClose = (event: React.SyntheticEvent) => {
    if (onClose) {
      onClose(event, 'escapeKeyDown');
    }
  };

  const paperSx = drawerPaperSx(anchor, drawerSize);

  const drawerContent = (
    <Box>
      {isMobile && anchor === DRAWER_ANCHORS.BOTTOM && showDragHandle && (
        <Box sx={dragHandleContainerSx}>
          <Box sx={dragHandleSx} aria-hidden="true" />
        </Box>
      )}

      {(title || description) && (
        <Box sx={drawerHeaderSx}>
          {anchor === DRAWER_ANCHORS.BOTTOM && (
            <Box sx={drawerDragIndicatorContainerSx}>
              <Box sx={drawerDragIndicatorSx} />
            </Box>
          )}

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

            {(anchor === DRAWER_ANCHORS.LEFT || anchor === DRAWER_ANCHORS.RIGHT) &&
              showCloseButton && (
                <IconButton aria-label="close drawer" onClick={handleDrawerClose}>
                  <CloseIcon />
                </IconButton>
              )}
          </Box>
        </Box>
      )}

      <>
        <Box sx={drawerContentSx}>{children}</Box>

        {anchor === DRAWER_ANCHORS.TOP && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingBottom: 1,
            }}
          >
            <Box sx={drawerDragIndicatorSx} />
          </Box>
        )}
      </>
    </Box>
  );

  if (isMobile && swipeable && variant === DRAWER_VARIANTS.TEMPORARY) {
    return (
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={handleDrawerClose}
        onOpen={() => {}}
        PaperProps={{
          sx: paperSx,
        }}
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
      PaperProps={{
        sx: paperSx,
      }}
      aria-label={drawerAriaLabel}
      {...rest}
    >
      {drawerContent}
    </MuiDrawer>
  );
};

export { Drawer };
