import { posthog } from '../lib/posthog'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-32 pb-16 px-8"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
              AI · PROJEKTY · VZDĚLÁVÁNÍ
            </span>
            <h1 className="font-serif text-[clamp(2.8rem,5vw,4.2rem)] leading-[1.1] text-dark dark:text-white font-normal mb-6 tracking-tight">
              Obchod, vzdělávání a AI. Propojuji je do projektů, které mají <em className="italic text-accent">dopad.</em>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[480px] mb-4 leading-[1.7]">
              Patnáct let zkušeností v B2B prodeji a školení. Dnes s pomocí AI dokážu za den to, co dřív trvalo týdny.
            </p>
            <p className="text-lg text-accent max-w-[480px] mb-10 leading-[1.7] font-medium">
              Hledám projekty a lidi, kde má smysl propojit zkušenost, AI a chuť dotahovat věci do konce.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 py-2.5 px-6 bg-[#0A0A0F] dark:bg-white dark:text-[#0A0A0F] text-white rounded-full text-sm font-medium font-sans transition-all duration-300 hover:bg-accent dark:hover:bg-accent dark:hover:text-white hover:-translate-y-0.5"
              >
                Zjistěte víc ↓
              </button>
              <a
                href="https://www.linkedin.com/in/jan-j%C3%ADlek-351356169/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture('linkedin_profile_clicked')}
                className="inline-flex items-center gap-2 py-2.5 px-6 bg-transparent text-dark dark:text-white border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium font-sans transition-colors hover:border-dark dark:hover:border-white"
              >
                LinkedIn
              </a>
              <a
                href="https://substack.com/@jilekjan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture('newsletter_subscription_started')}
                className="inline-flex items-center gap-2 py-2.5 px-6 bg-transparent text-dark dark:text-white border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium font-sans transition-colors hover:border-dark dark:hover:border-white"
              >
                Substack
              </a>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <img
              src="/hero.jpg"
              alt="Jan Jílek"
              className="w-full h-[350px] lg:h-[520px] object-cover object-[center_top] rounded-2xl"
              loading="eager"
            />
            <div
              className="absolute inset-4 -right-4 -bottom-4 left-4 rounded-2xl border-2 border-accent-light dark:border-accent/30 pointer-events-none -z-10 hidden lg:block"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
