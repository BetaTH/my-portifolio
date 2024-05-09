import { Button } from '@/components/buttons/button'
import { ProjectCard } from '@/components/cards/project-card'
import { ProjectInDevelopmentCard } from '@/components/cards/project-in-development-card'
import { SkillCard } from '@/components/cards/skill-card'
import { SocialCard } from '@/components/cards/social-card'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { P } from '@/components/layout/paragraph'
import { Section } from '@/components/layout/section'
import { AboutImage } from '@/components/svg-components/about-image'
import { HeroImage } from '@/components/svg-components/hero-image'
import { IconEmail } from '@/components/svg-components/icon-email'
import { IconGit } from '@/components/svg-components/icon-git'
import { getCurrentLocale, getScopedI18n } from '@/lib/locale/server'
import { GetPortfolioProjectsData } from '@/lib/services/get-portfolio-projects-data'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { skills } from '@/lib/utils/skill-data'
import { setStaticParamsLocale } from 'next-international/server'
import Link from 'next/link'

export default async function Home({ params }: { params: { locale: string } }) {
  setStaticParamsLocale(params.locale)
  const locale = getCurrentLocale()
  const t = await getScopedI18n('pages.home')
  const res = await GetPortfolioProjectsData()

  const data: PortfolioData = await res.json()
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
              <P>{t('hero.descripiton')}</P>
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
              <div className="flex max-w-full flex-col gap-3 w-[32.375rem]">
                <P>{t('about.about01')}</P>
                <P>{t('about.about02')}</P>
                <P>{t('about.about03')}</P>
                <P>{t('about.about04')}</P>
              </div>
            </div>
          </Section>
          <Section id="projects" title={t('projects.name')}>
            <div className="flex flex-col gap-8 w-full">
              {data.projects.map((project, idx) => {
                return (
                  <ProjectCard
                    variant={idx % 2 === 0 ? 'primary' : 'secondary'}
                    key={project.title}
                    project={project}
                    locale={locale}
                  />
                )
              })}
            </div>
            <h3 className="text-title text-[1.625rem]/[1.625rem] font-medium">
              {t('projects.development')}
            </h3>
            <div className="w-[50.375rem] gap-6 2md:w-full flex flex-wrap justify-center">
              {data.projectsInDevelopment.map((projectInDevelopment) => {
                return (
                  <ProjectInDevelopmentCard
                    key={projectInDevelopment.title}
                    projectInDevelopment={projectInDevelopment}
                    locale={locale}
                  />
                )
              })}
            </div>
            <Button className="gap-2" asChild>
              <Link
                href={'https://github.com/BetaTH?tab=repositories'}
                target="_blank"
              >
                {t('projects.buttons.see-all')} <IconGit />
              </Link>
            </Button>
          </Section>
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
          <Link
            href={`mailto:thielson12@gmail.com?subject=${t('contact.message')}`}
            className="flex items-center mt-8 gap-5 font-sans transition-colors hover:bg-gray-200/10 rounded-xl p-2"
          >
            <IconEmail className="size-9" />
            <span className="text-title text-4xl sm:text-2xl tracking-tight">
              thielson12@gmail.com
            </span>
          </Link>
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
