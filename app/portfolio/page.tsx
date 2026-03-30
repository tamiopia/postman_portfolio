import { Analytics } from "@vercel/analytics/react"
import { NormalPortfolio } from "@/components/normal-portfolio"

export default function PortfolioPage() {
  return (
    <>
      <NormalPortfolio />
      <Analytics />
    </>
  )
}
