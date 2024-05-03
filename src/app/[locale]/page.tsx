import { SkillCard } from '@/components/cards/skill-card'
import { SocialCard } from '@/components/cards/social-card'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Section } from '@/components/section'
import { AboutImage } from '@/components/svg-components/about-image'
import { HeroImage } from '@/components/svg-components/hero-image'
import { IconEmail } from '@/components/svg-components/icon-email'
import { getScopedI18n } from '@/lib/locale/server'
import { skills } from '@/lib/utils/skill-data'
import { setStaticParamsLocale } from 'next-international/server'

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n('pages.home')
  return (
    <main id={'home'} className="bg-body pt-[4.75rem]">
      <Header />
      <div className="px-6">
        <div className="mx-auto w-[65rem] max-w-full">
          <section className="py-12 flex justify-between items-center gap-9 md:flex-col-reverse">
            <div className="w-[37rem] max-w-full flex flex-col gap-[2.125rem]">
              <h1 className="text-[2.125rem]/[2.25rem] font-semibold text-title">
                {t('hero.title01')}{' '}
                <span className="text-primary">{t('hero.title02')} </span>
                {t('hero.title03')}
                <br />
                <span className="text-primary">{t('hero.title04')}</span>
              </h1>
              <p className="text-base text-body-text font-sans tracking-[0.015em] 2sm:text-lg">
                {t('hero.descripiton')}
              </p>
              <SocialCard />
            </div>
            <HeroImage className="w-[25.625rem] h-[18.625rem] sm:w-full" />
          </section>
          <Section id="skills" title="Skills">
            <div className="grid grid-cols-5 pt-5 gap-[3.125rem] 2sm:grid-cols-3 sm:!grid-cols-2 2md:grid-cols-4 w-fit mx-auto">
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </Section>
          <Section id="about" title={t('about.name')}>
            <div className="w-full flex gap-[3.75rem] items-center justify-center md:flex-col">
              <AboutImage className="w-[25rem] h-[23.5625rem] sm:w-full" />
              <div className="flex max-w-full flex-col gap-3 text-base/5 2sm:text-lg tracking-[0.015em] font-sans w-[32.375rem] text-body-text">
                <p>{t('about.about01')}</p>
                <p>{t('about.about02')}</p>
                <p>{t('about.about03')}</p>
                <p>{t('about.about04')}</p>
              </div>
            </div>
          </Section>
          {/* <Section id="experience" title="My Experience"></Section> */}
        </div>
      </div>
      <div className="px-6 bg-gray-800">
        <section
          id="contact"
          className="mx-auto w-[65rem] max-w-full py-20 flex items-center flex-col text-center"
        >
          <h2 className="text-[2rem]/[2.125rem] text-primary mb">
            {t('contact.text01')}
          </h2>
          <p className="text-xl/6 text-title max-w-[30.375rem] mt-2 font-sans">
            {t('contact.text02')}
          </p>
          <div className="flex items-center mt-8 gap-5 font-sans">
            <IconEmail className="size-9" />
            <span className="text-title text-4xl sm:text-2xl tracking-tight">
              thielson12@gmail.com
            </span>
          </div>
          <p className="text-base text-body-text mt-8 mb-3 font-sans">
            {t('contact.text03')}
          </p>
          <SocialCard />
        </section>
      </div>
      <Footer />
    </main>
  )
}
