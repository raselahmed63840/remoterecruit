export default function ScrollTop() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border-0 bg-gradient-to-br from-[#52bee3] to-[#244a93] text-2xl font-extrabold text-white shadow-[0_18px_34px_rgba(36,74,147,.25)] hover:-translate-y-1"
    >
      ↑
    </button>
  )
}
