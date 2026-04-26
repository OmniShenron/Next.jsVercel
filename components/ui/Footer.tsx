import { PERSON } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-subtle py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl text-gold tracking-widest">SSP</span>
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
          {PERSON.name} · {PERSON.location} · {new Date().getFullYear()}
        </span>
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
          DevOps · SRE · Infrastructure
        </span>
      </div>
    </footer>
  )
}
