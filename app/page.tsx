import { ACHIEVEMENTS, EXPERIENCE, PERSON, PROJECTS, SKILLS, STATS } from '@/lib/data'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="text-lg font-semibold tracking-wide text-cyan">
            {PERSON.nameShort}
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${PERSON.email}`}
            className="rounded-full bg-cyan px-4 py-2 text-xs font-semibold text-slate-950 transition hover:brightness-110"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-3 py-1 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" /> Available for DevOps/SRE roles
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Modern, reliable infrastructure with a clean user-first engineering mindset.
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">{PERSON.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200">
              View Projects
            </a>
            <a href="#contact" className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">
              Book a Call
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-cyan/10">
          <video src={PERSON.video} autoPlay loop muted playsInline className="h-80 w-full rounded-xl object-cover" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {STATS.slice(0, 4).map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-slate-950/60 p-3">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-slate-300">
            {PERSON.name} is a {PERSON.title} with {PERSON.experience} of hands-on experience designing resilient cloud
            systems, automated releases, and incident-safe delivery workflows.
          </p>
          <div className="mt-5 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <p><span className="font-medium text-white">Location:</span> {PERSON.location}</p>
            <p><span className="font-medium text-white">Email:</span> {PERSON.email}</p>
            <p><span className="font-medium text-white">Website:</span> {PERSON.website}</p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-semibold">Core Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SKILLS.map((group) => (
            <article key={group.category} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.slice(0, 4).map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded bg-white/10">
                      <div className="h-full rounded bg-cyan" style={{ width: `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-4">
          {EXPERIENCE.map((job) => (
            <article key={job.period} className="rounded-xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-xs uppercase tracking-wide text-cyan">{job.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{job.role} · {job.company}</h3>
              <p className="mt-1 text-sm text-slate-400">{job.type} · {job.duration}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {job.highlights.slice(0, 5).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-semibold">Featured Project</h2>
        {PROJECTS.map((project) => (
          <article key={project.id} className="mt-6 rounded-xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{project.type}</span>
            </div>
            <p className="mt-4 text-slate-300">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-semibold">Outcomes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-3xl font-bold text-cyan">{item.metric}</p>
              <p className="mt-1 font-medium">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6">
        <div className="rounded-2xl border border-cyan/40 bg-cyan/10 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Let’s build a better experience together.</h2>
          <p className="mt-3 text-slate-200">Open to consulting, full-time roles, and high-impact infrastructure projects.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`mailto:${PERSON.email}`} className="rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-slate-950">
              {PERSON.email}
            </a>
            <a href={`tel:${PERSON.phone}`} className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold">
              {PERSON.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
