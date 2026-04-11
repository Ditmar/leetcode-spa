import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { CardProps } from "./Card.types";
import { useCardExpand } from "./Card.hook";
import {
  StyledCard,
  VerticalCard,
  HighlightedCard,
} from "./Card.styles";

// 🔥 helper para evitar {}
const isValidNode = (node: any) => {
  if (!node) return undefined;
  if (typeof node === "object" && Object.keys(node).length === 0) {
    return undefined;
  }
  return node;
};

export const Card = ({
  layout = "vertical",
  customVariant = "default", 
  title,
  subheader,
  avatar,
  media,
  mediaType = "image",
  actions,
  expandable,
  expandedContent,
  children,
  ...props
}: CardProps) => {
  const { expanded, toggleExpand } = useCardExpand();

  const isHorizontal = layout === "horizontal";

  // ✅ usar let porque se reasigna
  let Container = isHorizontal ? StyledCard : VerticalCard;

  // ✅ usar customVariant (no variant)
  if (customVariant === "highlighted") {
    Container = HighlightedCard;
  }

  return (
    <Container {...props}>
      <Stack
        direction={{
          xs: "column",
          md: isHorizontal ? "row" : "column",
        }}
        spacing={2} 
        width="100%"
      >
        {media && (
          <CardMedia
            component={mediaType === "image" ? "img" : "video"}
            src={media}
            controls={mediaType === "video"}
            sx={{
              width: isHorizontal ? { xs: "100%", md: "40%" } : "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        )}

        <Stack flex={1}>
          {(title || subheader) && (
            <CardHeader
              avatar={isValidNode(avatar)}
              title={title}
              subheader={subheader}
            />
          )}

          <CardContent>{isValidNode(children)}</CardContent>

          {(actions || expandable) && (
            <CardActions
              sx={{
                px: 2,
                pb: 2,
                justifyContent: "flex-end",
                gap: 1,
              }}
            >
              {isValidNode(actions)}

              {expandable && (
                <IconButton
                  onClick={toggleExpand}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              )}
            </CardActions>
          )}

          {expandable && (
            <Collapse in={expanded}>
              <CardContent>
                {isValidNode(expandedContent)}
              </CardContent>
            </Collapse>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};