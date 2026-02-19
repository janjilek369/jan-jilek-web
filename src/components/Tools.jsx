import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const tools = [
  { name: 'Mac', desc: 'pracovní základ' },
  { name: 'Claude Opus', desc: 'strategie, texty, přemýšlení' },
  { name: 'Cursor', desc: 'tvorba webů a aplikací' },
  { name: 'Gamma', desc: 'prezentace a weby' },
]

const Tools = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      id="tools"
      ref={ref}
      className={`py-16 px-8 bg-gray-50 ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          Stack
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark font-normal tracking-tight mb-10 leading-[1.15]">
          S čím pracuji
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((t, i) => (
            <div key={i} className="text-left">
              <div className="font-serif text-xl text-dark font-normal mb-1">
                {t.name}
              </div>
              <div className="text-base text-gray-500">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
