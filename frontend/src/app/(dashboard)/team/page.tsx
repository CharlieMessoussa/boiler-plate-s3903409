import type { Metadata } from 'next'
import { TeamMemberCard, type TeamMemberAccent } from '@/components/shared/TeamMemberCard'

export const metadata: Metadata = {
  title: 'Team',
}

const TEAM: {
  initial: string
  name: string
  role: string
  blurb: string
  accent: TeamMemberAccent
}[] = [
  {
    initial: 'N',
    name: 'Nikolas',
    role: 'Project Manager',
    blurb: 'Keeps the sprint on track and ensures the team ships on time.',
    accent: 'teal',
  },
  {
    initial: 'F',
    name: 'Fuyu',
    role: 'Business Analyst',
    blurb: 'Translates stakeholder needs into clear, actionable requirements.',
    accent: 'blue',
  },
  {
    initial: 'K',
    name: 'Kazi',
    role: 'UX Designer',
    blurb:
      'Designs how the product looks and feels — from wireframe to pixel-perfect. Focuses on making things clear, accessible, and worth using, and sweats every detail so the final product feels considered rather than assembled.',
    accent: 'purple',
  },
  {
    initial: 'K',
    name: 'Krish',
    role: 'Developer',
    blurb: 'Builds the features and keeps the codebase clean and fast.',
    accent: 'orange',
  },
]

export default function TeamPage() {
  return (
    <div className="rounded-2xl bg-zinc-950 p-6 sm:p-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
          The people behind the project
        </p>
        <h1 className="font-display text-4xl text-white sm:text-5xl">Meet the team</h1>
        <p className="text-zinc-400">Four people. One goal. Build something worth showing.</p>
      </div>

      <div className="mt-8 space-y-4">
        {TEAM.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  )
}
