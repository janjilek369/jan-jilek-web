import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const About = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 px-8 ${isVisible ? 'fade-up visible' : 'fade-up'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-4">
          O mně
        </span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-dark dark:text-white font-normal tracking-tight mb-6 leading-[1.15]">
          Kdo jsem
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start mt-12">
          <img
            src="/about.jpg"
            alt="Jan Jílek"
            className="w-full h-[350px] lg:h-[480px] object-cover object-[center_top] rounded-xl"
            loading="lazy"
          />
          <div className="pt-4 space-y-5">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.8]">
              Nečekám na manuály ani na pokyny. Když vidím příležitost, jdu do toho. Tak jsem se vždycky učil a tak pracuju dodnes.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.8]">
              Když jsem začal prodávat iPady do škol, zjistil jsem, že klient nepotřebuje jen krabice. Potřebuje pomoct se správou, se školením, s tím aby technologie reálně fungovaly. Místo toho, abych to delegoval, naučil jsem se správu sám. Dnes pravidelně školím učitele přes Zoom, tvořím videonávody a pomáhám školám, aby si s iPady poradily samy.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.8]">
              Stejný přístup mám k AI. Sám jsem s jeho pomocí postavil web modernivyuka.digital, tenhle osobní web i kompletní produkt Gamma webinářů pro školy. Vždycky mě zajímá celý proces. Od nápadu přes realizaci po propagaci.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.8]">
              Posledních 15 let pracuju v B2B prodeji technologií do škol. Pomáhám tisícovce škol s výběrem, nákupem i zavedením technologií do praxe. Ale obchod je jen část toho, co dělám. Tvořím obsah, vedu školení, buduji projekty. Rozumím celému procesu a dokážu doručit komplexní řešení bez zbytečných mezičlánků.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.8]">
              Miluju ekosystém Apple. Denně pracuju s nejlepšími AI nástroji — vybírám ten správný podle situace, ne ze zvyku. Věřím, že nejlepší práce vzniká s nejlepšími nástroji.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-[1.8]">
              Mimo práci mě najdete na CrossFitu. Mám dvě děti a ženu, která se mnou tu cestu sdílí.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
