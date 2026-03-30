"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type PortfolioModeToggleProps = {
  mode: "api" | "classic"
  className?: string
}

export function PortfolioModeToggle({ mode, className }: PortfolioModeToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-sm backdrop-blur-md",
        className,
      )}
    >
      <Link
        href="/"
        className={cn(
          "rounded-full px-4 py-2 transition",
          mode === "api" ? "bg-orange-500 text-white shadow-sm" : "text-white/70 hover:text-white",
        )}
      >
        API Portfolio
      </Link>
      <Link
        href="/portfolio"
        className={cn(
          "rounded-full px-4 py-2 transition",
          mode === "classic" ? "bg-orange-500 text-white shadow-sm" : "text-white/70 hover:text-white",
        )}
      >
        Classic Portfolio
      </Link>
    </div>
  )
}
