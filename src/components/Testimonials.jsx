import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const testimonials = [
  { quote: 'Lektor byl znalý a dobře připravený, dobře reagoval i na dotazy. 10 z 10.', name: 'Jiří Mejda', role: 'správce iPadů' },
  { quote: 'Naprosto perfektní, velmi oceňuji znalosti lektora.', name: 'Hana Lenertová', role: 'učitelka' },
  { quote: 'Vše vysvětleno, otázky zodpovězeny, vychytávky ukázány a nabídnuta pomoc.', name: 'Klára Klimecká', role: 'učitelka' },
  { quote: 'Pan Jílek vše srozumitelně ukazoval a vysvětloval.', name: 'Hana Zahrádková', role: 'učitelka' },
  { quote: 'Přínosné a srozumitelné — porovnávám s jiným zprostředkovatelem.', name: 'Jan Hanus', role: 'správce iPadů' },
  { quote: 'Vaše webináře jsou naprosto super.', name: 'Marta Kočí', role: 'učitelka' },
]

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-16 px-8 bg-gray-50 dark:bg-[#111114] ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          Reference
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark dark:text-white font-normal tracking-tight mb-10 leading-[1.15]">
          Co říkají účastníci
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i}>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-[1.7] mb-3">
                {t.quote}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.name}, {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
