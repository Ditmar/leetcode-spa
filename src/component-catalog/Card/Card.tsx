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
import { StyledCard, VerticalCard } from "./Card.styles";

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
  const Container = isHorizontal ? StyledCard : VerticalCard;

  return (
    <Container {...props}>
      <Stack
        direction={{
          xs: "column",
          md: isHorizontal ? "row" : "column",
        }}
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
            <CardActions>
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