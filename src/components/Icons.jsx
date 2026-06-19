export function CheckIcon({ ok = true }) {
  return (
    <span
      className={`mt-[2px] grid h-[21px] w-[21px] shrink-0 place-items-center rounded-full ${
        ok ? 'bg-gradient-to-br from-[#5fc2e2] to-[#245493]' : 'bg-[#8c8f9f]'
      }`}
      aria-hidden="true"
    >
      {ok ? (
        <svg viewBox="0 0 18 18" className="h-[11px] w-[11px] text-white" fill="none">
          <path d="M4.2 9.1 7.3 12.2 13.8 5.8" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 18 18" className="h-[10px] w-[10px] text-white" fill="none">
          <path d="m5 5 8 8M13 5l-8 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      )}
    </span>
  )
}

export function DiamondIcon() {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white shadow-[0_8px_18px_rgba(30,83,148,.16)]" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-[21px] w-[21px] text-[#3478b7]" fill="none">
        <path d="M12 2.8 19.2 8.4 12 21.2 4.8 8.4 12 2.8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8.8 8.4h6.4L12 21.2 8.8 8.4Z" fill="currentColor" opacity=".22" />
      </svg>
    </span>
  )
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-[25px] w-[25px]" fill="none" aria-hidden="true">
      <path d="M4 12h14M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
