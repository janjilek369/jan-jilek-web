import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const competencies = [
  { num: '01', title: 'AI-first myšlení', desc: 'Každý problém nejdřív řeším přes AI. Strategii, texty, prezentace, weby, propagaci. Ne jako experiment, ale jako denní workflow. Když mi někdo řekne "to nejde", zkusím to nejdřív s AI.' },
  { num: '02', title: 'Od nápadu po hotový produkt', desc: 'Rozumím celému procesu. Vymyslím projekt, promyslím strategii, vytvořím obsah, postavím web, nastavím propagaci. Díky tomu dokážu doručit komplexní řešení rychle a bez zbytečných mezičlánků.' },
  { num: '03', title: 'Učím na příkladech', desc: 'Neříkám "AI je budoucnost". Ukážu, jak za 5 minut vytvořit prezentaci, kterou byste dělali hodinu. Všechno co učím, sám používám. Žádná teorie, jen to co reálně funguje.' },
  { num: '04', title: '15 let v obchodě', desc: 'Tisíce klientů, desítky milionů v prodeji. Rozumím byznysu, vyjednávání, cenotvorbě i dlouhodobým vztahům. Technologie bez obchodního myšlení nemají dopad. Já mám obojí.' },
]

const Competencies = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      id="competencies"
      ref={ref}
      className={`py-16 px-8 ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          Kompetence
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark dark:text-white font-normal tracking-tight mb-6 leading-[1.15]">
          Čím se odlišuji
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {competencies.map((c, i) => (
            <div
              key={i}
              className="p-10 bg-white dark:bg-[#18181B] border border-gray-100 dark:border-gray-800 rounded-xl transition-all duration-[0.4s] ease-smooth hover:border-accent-light dark:hover:border-accent/30 hover:shadow-card-hover dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <div className="font-serif text-2xl text-gray-300 dark:text-gray-600 mb-5 italic">
                {c.num}
              </div>
              <h3 className="font-serif text-2xl text-dark dark:text-white font-normal mb-3">
                {c.title}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-[1.7]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Competencies
