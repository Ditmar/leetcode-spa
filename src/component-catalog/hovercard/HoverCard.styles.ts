import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

// ---------------------------------------------------------------------------
// Floating card surface
// ---------------------------------------------------------------------------

/**
 * The floating card surface.
 *
 * Figma spec:
 * - White background
 * - Rounded corners (borderRadius * 3 ≈ 12 px at default theme scale)
 * - Soft shadow (elevation 4 level)
 * - Comfortable internal padding
 * - No hardcoded px — all values from theme tokens
 */
export const HoverCardPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 3,
  boxShadow: theme.shadows[4],
  outline: `1px solid ${theme.palette.divider}`,
  overflowWrap: "break-word",
  wordBreak: "break-word",
  maxWidth: "100%",

  // Fluid width on narrow screens (320 px, 375 px)
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    width: `calc(100vw - ${theme.spacing(4)})`,
  },
}));

// ---------------------------------------------------------------------------
// Trigger wrapper
// ---------------------------------------------------------------------------

/**
 * Inline wrapper that preserves the trigger element's natural display
 * while providing a stable DOM node for the Popper anchor ref.
 */
export const TriggerWrapper = styled("span")({
  display: "inline-block",
});

// ---------------------------------------------------------------------------
// Demo page layout (used in stories / Figma demo)
// ---------------------------------------------------------------------------

/**
 * Outer page background — matches the Figma light grey surface.
 */
export const DemoPageRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  minHeight: "100vh",
  padding: theme.spacing(3),
}));

/**
 * Page title typography block (bold, large).
 */
export const DemoPageTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  fontWeight: 700,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: theme.typography.h5.lineHeight,
  color: theme.palette.text.primary,
}));

/**
 * Page subtitle below the title.
 */
export const DemoPageSubtitle = styled("p")(({ theme }) => ({
  margin: `${theme.spacing(0.5)} 0 ${theme.spacing(3)}`,
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
}));

/**
 * White rounded container that wraps the demo triggers — matches the
 * Figma card that holds "Hover for Tooltip" and "Hover for Card".
 */
export const DemoTriggerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(3),
  display: "inline-flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  // Subtle border visible on the grey background
  border: `1px solid ${theme.palette.divider}`,
}));