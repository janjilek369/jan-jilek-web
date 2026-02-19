import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const offers = [
  { title: 'Webináře a školení', desc: 'Online i offline školení pro pedagogické sbory. Od správy iPadů po práci s AI nástroji ve výuce.' },
  { title: 'Konzultace', desc: 'Pomůžu vám vybrat správné technologie, nastavit správu zařízení a naučit váš tým s nimi reálně pracovat. Nejde jen o nákup, ale o to, aby technologie ve škole opravdu fungovaly.' },
  { title: 'Tvorba obsahu', desc: 'Newslettery, vzdělávací materiály, videonávody, prezentace. Obsah, který má dopad.' },
]

const Offer = () => {
  const [ref, isVisible] = useIntersectionObserver()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="offer"
      ref={ref}
      className={`py-16 px-8 ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          Nabídka
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark font-normal tracking-tight mb-6 leading-[1.15]">
          Jak vám můžu pomoct
        </h2>
        <p className="text-lg text-gray-500 max-w-[600px] leading-[1.7]">
          Pracuji se školami a firmami, které chtějí technologie nejen nakoupit, ale i reálně využívat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="py-8">
            <h3 className="font-serif text-[1.4rem] text-dark font-normal mb-3">
              {offers[0].title}
            </h3>
            <p className="text-base text-gray-500 leading-[1.7]">
              {offers[0].desc}
            </p>
          </div>
          <div className="py-8 md:border-l md:border-gray-300 md:pl-8">
            <h3 className="font-serif text-[1.4rem] text-dark font-normal mb-3">
              {offers[1].title}
            </h3>
            <p className="text-base text-gray-500 leading-[1.7]">
              {offers[1].desc}
            </p>
          </div>
          <div className="py-8 md:border-l md:border-gray-300 md:pl-8">
            <h3 className="font-serif text-[1.4rem] text-dark font-normal mb-3">
              {offers[2].title}
            </h3>
            <p className="text-base text-gray-500 leading-[1.7]">
              {offers[2].desc}
            </p>
          </div>
        </div>
        <div className="mt-12">
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-dark text-white rounded-full text-sm font-medium font-sans transition-all duration-300 hover:bg-accent hover:-translate-y-0.5"
          >
            Ozvěte se mi →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Offer
