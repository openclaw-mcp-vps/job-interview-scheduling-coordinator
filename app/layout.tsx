import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Scheduling Coordinator — Automate Multi-Round Interviews',
  description: 'Coordinate complex interview schedules automatically. Availability matching, conflict detection, and auto-rescheduling for HR teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3adff3e2-5551-4e31-a1c4-6689d200ba92"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
