import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const stats = [
  { number: '15 let', label: 'v obchodě a vzdělávání' },
  { number: '1 000+', label: 'spokojených klientů' },
  { number: 'Desítky mil.', label: 'v prodejích ročně' },
  { number: 'Stovky', label: 'proškolených učitelů za 5 let' },
  { number: '10+ let', label: 'newsletter pro školy' },
]

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 px-8 bg-gray-50 ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          Zkušenosti
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark font-normal tracking-tight mb-6 leading-[1.15]">
          Co za mnou stojí
        </h2>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 my-14 py-12 border-t border-b border-gray-300">
          {stats.map((item, i) => (
            <div key={i} className="text-left">
              <div className="font-serif text-[2rem] lg:text-[2.5rem] text-dark leading-[1.1] mb-2 tracking-tight">
                {item.number}
              </div>
              <div className="text-base text-gray-500 leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[720px] mt-8">
          <p className="text-lg text-gray-700 mb-4 leading-[1.8]">
            Za svou kariéru jsem prošel celým cyklem práce s klientem. Od prvního kontaktu přes konzultaci, nabídku a prodej až po školení a dlouhodobou podporu. Pracuji se stovkami organizací a moje doporučení vychází z reálné praxe, ne z teorie.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-[1.8]">
            Specializuji se na B2B prodej technologií do vzdělávání. Rozumím potřebám škol, cenotvorbě, výběrovým řízením i technické správě zařízení.
          </p>
          <p className="text-lg text-gray-700 leading-[1.8]">
            Dnes přidávám třetí rozměr: s AI realizuji projekty od nápadu po výsledek a zkušenosti sdílím na Substacku a webinářích.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
