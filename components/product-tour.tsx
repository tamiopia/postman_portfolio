"use client"

import { useEffect, useState } from "react"
import { Compass, Sparkles, Wand2, X } from "lucide-react"
import { EventData, Joyride, STATUS, Step, TooltipRenderProps } from "react-joyride"

function TourTooltip({
  backProps,
  closeProps,
  index,
  isLastStep,
  primaryProps,
  skipProps,
  size,
  step,
  tooltipProps,
}: TooltipRenderProps) {
  const progress = ((index + 1) / size) * 100

  return (
    <div
      {...tooltipProps}
      className="tour-tooltip-card w-[min(92vw,30rem)] overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]/95 text-white shadow-[0_28px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl"
    >
      <div className="relative overflow-hidden border-b border-white/10 px-5 pb-4 pt-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.28),_transparent_48%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_42%)]" />
        <div className="relative flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-200">
              <Sparkles className="h-3.5 w-3.5" />
              Guided Tour
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">
                Step {index + 1} of {size}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
                {typeof step.title === "string" ? step.title : "Explore the interface"}
              </h3>
            </div>
          </div>
          <button
            {...closeProps}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,#f97316_0%,#fb923c_48%,#38bdf8_100%)] transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="px-5 pb-5 pt-4">
        <div className="tour-tooltip-content text-sm leading-7 text-white/78">{step.content}</div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <button
            {...skipProps}
            className="text-sm font-medium text-white/55 transition hover:text-white/85"
          >
            Skip tour
          </button>

          <div className="flex items-center gap-2">
            {index > 0 && (
              <button
                {...backProps}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Back
              </button>
            )}
            <button
              {...primaryProps}
              className="rounded-full bg-[linear-gradient(135deg,#f97316_0%,#fb923c_55%,#fdba74_100%)] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(249,115,22,0.35)] transition hover:scale-[1.02] hover:shadow-[0_16px_34px_rgba(249,115,22,0.42)]"
            >
              {isLastStep ? "Start Exploring" : "Next Stop"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductTour() {
  const [run, setRun] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const timer = window.setTimeout(() => {
      setRun(true)
    }, 900)

    return () => window.clearTimeout(timer)
  }, [])

  const steps: Step[] = [
    {
      target: "body",
      title: "Hi, I’m Tamagn. Let me tour you around.",
      content:
        "Welcome to my portfolio. I built it to feel interactive, a little different, and closer to how I actually work. Instead of scrolling through a normal site, you can explore my skills, projects, and experience the same way developers explore APIs in Postman. Let me show you around.",
      placement: "center",
      skipBeacon: true,
    },
    {
      target: "#sidebar-panel",
      title: "Use the sidebar like an endpoint map",
      content:
        "Each collection acts like a different part of the story. Click around here to jump between profile data, projects, experience, and other pieces of the portfolio without losing the API-style feeling.",
      placement: "right",
    },
    {
      target: "#request-panel",
      title: "The request editor sets the context",
      content:
        "This panel shows the method, URL, parameters, headers, and body for the item you are viewing. You can make a request to any endpoint in my portfolio from here, just like you would in the real Postman, which makes it easier to understand how the experience works.",
      placement: "bottom",
    },
    {
      target: "#send-button",
      title: "Send brings the interface to life",
      content:
        "When you click Send, the selected portfolio endpoint is fetched and rendered. It is the moment where the mock API interaction becomes a guided way to discover the work.",
      placement: "bottom",
    },
    {
      target: "#response-panel",
      title: "Read the response like a polished story payload",
      content:
        "The response area is where the content opens up. Think of it as the payoff: clean data, clear structure, and a fast way for visitors to understand what you have built and where you can add value.",
      placement: "top",
    },
  ]

  const handleJoyrideEvent = ({ status }: EventData) => {
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false)
    }
  }

  const replayTour = () => {
    setRun(false)
    window.setTimeout(() => {
      setRun(true)
    }, 80)
  }

  if (!isClient) return null

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        continuous
        onEvent={handleJoyrideEvent}
        scrollToFirstStep
        tooltipComponent={TourTooltip}
        locale={{
          last: "Start Exploring",
          next: "Next Stop",
          skip: "Skip tour",
        }}
        options={{
          arrowColor: "#101010",
          backgroundColor: "#101010",
          overlayColor: "rgba(4, 7, 10, 0.76)",
          primaryColor: "#f97316",
          spotlightPadding: 14,
          spotlightRadius: 18,
          textColor: "#ffffff",
          zIndex: 120,
        }}
        styles={{
          beacon: {
            display: "none",
          },
          beaconInner: {
            display: "none",
          },
          beaconOuter: {
            display: "none",
          },
          buttonBack: {
            display: "none",
          },
          buttonClose: {
            display: "none",
          },
          buttonPrimary: {
            display: "none",
          },
          buttonSkip: {
            display: "none",
          },
          overlay: {
            backgroundColor: "rgba(4, 7, 10, 0.76)",
          },
          tooltip: {
            padding: 0,
            borderRadius: 28,
          },
        }}
      />

      <button
        type="button"
        onClick={replayTour}
        className="tour-replay-button fixed bottom-5 right-5 z-[90] inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#121212]/88 px-4 py-3 text-left text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-orange-400/30 hover:bg-[#171717]"
      >
        <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f97316,#fb923c)] text-white shadow-[0_10px_24px_rgba(249,115,22,0.35)]">
          <span className="tour-replay-ping absolute inset-0 rounded-full bg-orange-400/35" />
          <Compass className="relative h-4 w-4" />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold leading-none">Replay tour</span>
          <span className="mt-1 text-xs leading-none text-white/55">Guided walkthrough</span>
        </span>
        <Wand2 className="h-4 w-4 text-orange-300/80" />
      </button>
    </>
  )
}
