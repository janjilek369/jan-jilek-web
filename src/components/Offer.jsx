import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const offers = [
  { tag: 'AI KONZULTACE', title: 'AI v praxi — předám co umím', desc: 'Používám AI denně na reálných projektech. Rád předám zkušenosti — firmám i jednotlivcům. Osobně v okolí Pardubic a Hradce Králové, online kdekoliv.' },
  { title: 'Webináře a školení', desc: 'Online i offline školení pro pedagogické sbory. Od správy iPadů po práci s AI nástroji ve výuce.' },
  { title: 'Konzultace', desc: 'Pomůžu vašemu týmu zkrátit cestu od nápadu k výsledku pomocí AI. Bez zbytečných mezičlánků, bez dlouhého čekání.' },
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
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark dark:text-white font-normal tracking-tight mb-6 leading-[1.15]">
          Jak vám můžu pomoct
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[600px] leading-[1.7]">
          Pracuji se školami a firmami, které chtějí technologie nejen nakoupit, ale i reálně využívat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {offers.map((offer, i) => (
            <div
              key={i}
              className={`py-8 ${i > 0 ? 'md:border-l md:border-gray-300 dark:md:border-gray-700 md:pl-8' : ''}`}
            >
              <div className="min-h-[1.25rem] mb-2">
                {offer.tag && (
                  <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-accent">
                    {offer.tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-[1.4rem] text-dark dark:text-white font-normal mb-3">
                {offer.title}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-[1.7]">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 py-3.5 px-8 bg-dark dark:bg-white dark:text-dark text-white rounded-full text-sm font-medium font-sans transition-all duration-300 hover:bg-accent dark:hover:bg-accent dark:hover:text-white hover:-translate-y-0.5"
          >
            Ozvěte se mi →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Offer
