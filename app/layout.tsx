import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZoomSummarize – AI Meeting Summaries from Zoom Recordings",
  description: "Automatically transcribe Zoom recordings and generate actionable meeting summaries with tasks, decisions, and key points using AI."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="90b18e94-30be-40ac-b0e1-db3fb0a22b1c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
