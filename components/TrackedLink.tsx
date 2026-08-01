"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track, type TrackingEvent } from "@/lib/tracking";

export function TrackedLink({ event, data, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { event: TrackingEvent; data?: Record<string, unknown>; children: ReactNode }) {
  return <a {...props} onClick={(e) => { track(event, data); props.onClick?.(e); }}>{children}</a>;
}
