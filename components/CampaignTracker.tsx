"use client";
import { useEffect } from "react";
import { track } from "@/lib/tracking";
export function CampaignTracker({ campaign }: { campaign: string }) { useEffect(() => { track("campaign_page_view", { campaign }); }, [campaign]); return null; }
