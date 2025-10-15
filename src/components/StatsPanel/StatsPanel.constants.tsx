import { WorkOutline, CheckCircleOutline, ThumbDownOffAlt, HourglassEmpty } from "@mui/icons-material";
import type { StatItemData } from "./StatsPanel.types";
import React from "react";
export const TEST_STATS: Record<string, StatItemData> = {
    total: { label: "No of Tests", value: 32, icon: <WorkOutline />, color: "#5A6ACF" },
    passed: { label: "Passed", value: 12, icon: <CheckCircleOutline />, color: "#8FD16A" },
    failed: { label: "Failed", value: 19, icon: <ThumbDownOffAlt />, color: "#EF6D6D" },
    waiting: { label: "Waiting for result", value: 1, icon: <HourglassEmpty />, color: "#8FA7E8" },
};
