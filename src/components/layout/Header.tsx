export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white" style={{ boxShadow: '0 1px 0 var(--border)' }}>
      {/* Danish flag → Radikale gradient stripe */}
      <div
        className="h-1"
        style={{
          background: 'linear-gradient(to right, #C60C30 0%, #C60C30 20%, #fff 20%, #fff 30%, #5B2D8E 30%, #0D9488 100%)',
        }}
      />
      <div className="px-5 pt-3.5 pb-3">
        <h1
          className="text-xl font-extrabold tracking-tight leading-none"
          style={{
            background: 'linear-gradient(135deg, #5B2D8E, #0D9488)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Radikale Citater
        </h1>
        <p className="text-[11px] text-[var(--muted)] italic mt-0.5">
          Socialiberale stemmer siden 1905
        </p>
      </div>
    </header>
  )
}
