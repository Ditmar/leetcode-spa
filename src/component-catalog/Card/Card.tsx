import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Stack,
} from '@mui/material';

import { useCardExpand } from './Card.hook';
import { HighlightedCard, StyledCard, VerticalCard } from './Card.styles';

import type { CardProps } from './Card.types';
import type { ReactNode } from 'react';

// 🔥 helper sin any (fix ESLint)
const isValidNode = (node: ReactNode) => {
  if (!node) return undefined;

  if (typeof node === 'object' && node !== null && Object.keys(node as object).length === 0) {
    return undefined;
  }

  return node;
};

export const Card = ({
  layout = 'vertical',
  customVariant = 'default',
  title,
  subheader,
  avatar,
  media,
  mediaType = 'image',
  actions,
  expandable,
  expandedContent,
  children,
  ...props
}: CardProps) => {
  const { expanded, toggleExpand } = useCardExpand();

  const isHorizontal = layout === 'horizontal';

  let Container = isHorizontal ? StyledCard : VerticalCard;

  if (customVariant === 'highlighted') {
    Container = HighlightedCard;
  }

  return (
    <Container {...props}>
      <Stack
        direction={{
          xs: 'column',
          md: isHorizontal ? 'row' : 'column',
        }}
        spacing={2}
        width="100%"
      >
        {media && (
          <CardMedia
            component={mediaType === 'image' ? 'img' : 'video'}
            src={media}
            controls={mediaType === 'video'}
            sx={{
              width: isHorizontal ? { xs: '100%', md: '40%' } : '100%',
              aspectRatio: '16/9',
              objectFit: 'cover',
            }}
          />
        )}

        <Stack flex={1}>
          {(title || subheader) && (
            <CardHeader avatar={isValidNode(avatar)} title={title} subheader={subheader} />
          )}

          <CardContent>{isValidNode(children)}</CardContent>

          {(actions || expandable) && (
            <CardActions
              sx={{
                px: 2,
                pb: 2,
                justifyContent: 'flex-end',
                gap: 1,
              }}
            >
              {isValidNode(actions)}

              {expandable && (
                <IconButton onClick={toggleExpand} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              )}
            </CardActions>
          )}

          {expandable && (
            <Collapse in={expanded}>
              <CardContent>{isValidNode(expandedContent)}</CardContent>
            </Collapse>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};
