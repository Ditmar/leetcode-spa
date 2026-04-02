import type { CardProps as MuiCardProps } from "@mui/material/Card";
import type { ReactElement, ReactNode } from "react";

export type CardLayout = "vertical" | "horizontal";

export interface CardProps extends MuiCardProps {
  layout?: CardLayout;

  title?: string;
  subheader?: string;
  avatar?: ReactElement;

  media?: string;
  mediaType?: "image" | "video";

  actions?: ReactNode;

  expandable?: boolean;
  expandedContent?: ReactNode;
}