import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { posthog } from '../lib/posthog'

const contactLinks = [
  { label: 'LinkedIn', value: 'Jan Jílek', href: 'https://www.linkedin.com/in/jan-j%C3%ADlek-351356169/', icon: 'in', event: 'linkedin_profile_clicked' },
  { label: 'Substack', value: 'substack.com/@jilekjan', href: 'https://substack.com/@jilekjan', icon: '✉', event: 'newsletter_subscription_started' },
  { label: 'E-mail', value: 'honzajilek@seznam.cz', href: 'mailto:honzajilek@seznam.cz', icon: '@', event: 'contact_info_viewed' },
]

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 })

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 px-8 bg-[#0A0A0F] text-white ${isVisible ? 'visible' : 'fade-up'}`}
      style={{ minHeight: '1px' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[-0.02em] leading-[1.15] mb-6">
              Pojďme se <em className="italic text-accent-light">spojit.</em>
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.5)] leading-[1.7]">
              Hledáte člověka, který propojí obchod, technologie a vzdělávání? Který věci dotahuje a nebojí se nových nástrojů? Pojďme si promluvit.
            </p>
          </div>
          <div className="flex flex-col gap-5 pt-4">
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => posthog.capture(link.event)}
                className="flex items-center gap-4 py-5 px-6 border border-[rgba(255,255,255,0.1)] rounded-xl text-white transition-all duration-300 hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-[1.1rem] flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.75rem] text-[rgba(255,255,255,0.4)] tracking-[0.05em] uppercase font-medium">
                    {link.label}
                  </span>
                  <span className="text-base font-medium">
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
