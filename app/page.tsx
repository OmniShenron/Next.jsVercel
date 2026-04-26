'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ACHIEVEMENTS, EXPERIENCE, PERSON, PROJECTS, SKILLS, STATS } from '@/lib/data'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'capability', label: 'Capabilities' },
  { id: 'journey', label: 'Journey' },
  { id: 'impact', label: 'Impact' },
  { id: 'contact', label: 'Contact' },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]?.category ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.2 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const selectedSkillGroup = useMemo(
    () => SKILLS.find((skill) => skill.category === selectedSkill) ?? SKILLS[0],
    [selectedSkill],
  )

  return (
    <main className="relative overflow-hidden bg-[#06070a] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute left-[-10%] top-[15%] h-80 w-80 rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#overview" className="font-semibold tracking-[0.2em] text-cyan">
            {PERSON.nameShort}
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`rounded-full px-4 py-2 text-xs tracking-wide transition ${
                  activeSection === section.id
                    ? 'bg-white text-black'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${PERSON.email}`}
            className="rounded-full border border-cyan/60 bg-cyan/20 px-4 py-2 text-xs font-medium text-cyan transition hover:bg-cyan/30"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <section id="overview" className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1.2fr,1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" /> End-to-end reliability engineering
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
            Cinematic, high-performance DevOps portfolio with enterprise-grade clarity.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">{PERSON.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#capability" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
              Explore Expertise
            </a>
            <a href="#impact" className="rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              See Outcomes
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="panel-gradient relative overflow-hidden rounded-2xl border border-white/15 p-5"
        >
          <video src={PERSON.video} autoPlay loop muted playsInline className="h-72 w-full rounded-xl object-cover" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {STATS.slice(0, 4).map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-black/40 p-3">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="capability" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan/80">Capabilities Matrix</p>
            <h2 className="mt-2 text-3xl font-semibold">Interactive skill depth</h2>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            {SKILLS.map((skill) => (
              <button
                key={skill.category}
                onClick={() => setSelectedSkill(skill.category)}
                className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                  selectedSkill === skill.category
                    ? 'border-cyan/70 bg-cyan/15 text-white'
                    : 'border-white/10 bg-black/20 text-slate-300 hover:border-white/30'
                }`}
              >
                <p className="text-sm font-semibold">{skill.category}</p>
                <p className="text-xs text-slate-400">{skill.items.length} focus areas</p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkillGroup.category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold">{selectedSkillGroup.category}</h3>
              <p className="mt-1 text-sm text-slate-400">Live proficiency snapshot</p>
              <div className="mt-6 space-y-4">
                {selectedSkillGroup.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="font-medium text-cyan">{item.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-violet-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="journey" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan/80">Professional Journey</p>
        <h2 className="mt-2 text-3xl font-semibold">Timeline of ownership</h2>
        <div className="relative mt-8 space-y-6 border-l border-white/10 pl-6">
          {EXPERIENCE.map((job) => (
            <motion.article
              key={job.period}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition"
            >
              <span className="absolute -left-[34px] top-8 h-3 w-3 rounded-full bg-cyan" />
              <p className="text-xs tracking-wide text-cyan">{job.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
              <p className="mt-1 text-sm text-slate-400">{job.company} · {job.type} · {job.duration}</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {job.highlights.slice(0, 6).map((point) => (
                  <li key={point} className="rounded-lg bg-black/30 px-3 py-2">{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="impact" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan/80">Flagship Delivery</p>
            <h2 className="mt-2 text-3xl font-semibold">{PROJECTS[0].name}</h2>
            <p className="mt-1 text-sm text-slate-400">{PROJECTS[0].type}</p>
            <p className="mt-4 text-slate-300">{PROJECTS[0].desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {PROJECTS[0].stack.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-semibold text-cyan">{metric.metric}</p>
                <p className="mt-1 font-medium">{metric.label}</p>
                <p className="text-sm text-slate-400">{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6">
        <div className="panel-gradient rounded-3xl border border-cyan/40 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan/80">Contact Portal</p>
          <h2 className="mt-2 text-3xl font-semibold">Ready for a truly premium UI/UX and platform experience.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            I design and operate resilient systems with polished delivery workflows. Let&apos;s build a product experience your users remember.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${PERSON.email}`} className="rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-black">
              {PERSON.email}
            </a>
            <a href={`tel:${PERSON.phone}`} className="rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold">
              {PERSON.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
