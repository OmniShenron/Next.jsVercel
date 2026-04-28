export default function SiteFooter() {
  return (
    <footer className="footer" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
      <a href="#" style={{ fontFamily:'var(--font-d)', fontSize:28, letterSpacing:'.15em', background:'linear-gradient(90deg, var(--purple), var(--cyan))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', textDecoration:'none', cursor:'none' }}>
        SSP
      </a>
      <span style={{ fontFamily:'var(--font-m)', fontSize:9, letterSpacing:'.25em', textTransform:'uppercase', color:'var(--muted)' }}>
        Shanmukha Sai Praneeth · DevOps / SRE · Hyderabad
      </span>
      <span style={{ fontFamily:'var(--font-m)', fontSize:9, letterSpacing:'.2em', color:'var(--muted)' }}>
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  )
}
