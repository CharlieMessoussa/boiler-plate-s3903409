'use client'

import { useState } from 'react'

const READ_MORE_THRESHOLD = 140

const ACCENT_STYLES = {
  teal: { ring: 'border-teal-400', text: 'text-teal-300' },
  blue: { ring: 'border-blue-400', text: 'text-blue-300' },
  purple: { ring: 'border-purple-400', text: 'text-purple-300' },
  orange: { ring: 'border-orange-400', text: 'text-orange-300' },
} as const

export type TeamMemberAccent = keyof typeof ACCENT_STYLES

interface TeamMemberCardProps {
  initial: string
  name: string
  role: string
  blurb: string
  accent: TeamMemberAccent
}

export function TeamMemberCard({ initial, name, role, blurb, accent }: TeamMemberCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = blurb.length > READ_MORE_THRESHOLD
  const { ring, text } = ACCENT_STYLES[accent]

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div
          className={`flex size-14 shrink-0 items-center justify-center rounded-full border-2 bg-zinc-950 ${ring}`}
        >
          <span className={`text-xl font-semibold ${text}`}>{initial}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-white">{name}</h3>
            <span className="inline-flex items-center rounded-full bg-brand-400/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
              {role}
            </span>
          </div>
          <p className={`mt-1 text-sm text-zinc-400 ${!expanded && isLong ? 'line-clamp-2' : ''}`}>
            {blurb}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mt-1 text-sm font-medium text-brand-400 hover:text-brand-300"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
