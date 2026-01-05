"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface VersionSwitcherProps {
  currentVersion: "v1" | "v2";
  onVersionChange: (version: "v1" | "v2") => void;
}

export function VersionSwitcher({ currentVersion, onVersionChange }: VersionSwitcherProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full shadow-lg hover:bg-foreground/90 transition-colors text-sm font-medium">
            {currentVersion === "v1" ? "Version 1 (Current)" : "Version 2 (New)"}
            <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={() => onVersionChange("v1")}
            className={currentVersion === "v1" ? "bg-secondary" : ""}
          >
            Version 1 (Current)
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onVersionChange("v2")}
            className={currentVersion === "v2" ? "bg-secondary" : ""}
          >
            Version 2 (New)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
