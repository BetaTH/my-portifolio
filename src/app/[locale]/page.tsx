import { Button } from '@/components/buttons/button'
import { ProjectInDevelopmentCard } from '@/components/cards/project-in-development-card'
import { SkillCard } from '@/components/cards/skill-card'
import { SocialCard } from '@/components/cards/social-card'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { P } from '@/components/layout/paragraph'
import { Section } from '@/components/layout/section'
import { IconEmail } from '@/components/svg-components/icon-email'
import { IconGit } from '@/components/svg-components/icon-git'
import {
  getCurrentLocale,
  getScopedI18n,
  getStaticParams,
} from '@/lib/locale/server'
import { GetPortfolioProjectsData } from '@/lib/services/get-portfolio-projects-data'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { skills } from '@/lib/utils/skill-data'
import { setStaticParamsLocale } from 'next-international/server'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProjectsCarousel } from '@/components/carousel/projects-carousel'
import { AnimatedGridPattern } from '@/components/magicui/aniamted-grid-patern'
import { cn } from '@/lib/utils/cn'
import { DotPattern } from '@/components/magicui/dot-patern'
import Image from 'next/image'

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Home({ params }: { params: { locale: string } }) {
  setStaticParamsLocale(params.locale)
  const locale = getCurrentLocale()
  const t = await getScopedI18n('pages.home')
  const res = await GetPortfolioProjectsData()

  const data: PortfolioData = await res.json()
  return (
    <main
      id={'home'}
      className="dark:bg-body bg-gray-50 z-0 relative pt-[4.75rem] 2md:pt-[4.5rem]"
    >
      <DotPattern
        width={25}
        height={25}
        className={cn(
          '-z-10',
          '[mask-image:linear-gradient(to_right,transparent_0%,white_20%,white_80%,transparent_100%)]',
        )}
      />
      <Header />
      <div className="px-6">
        <div className="mx-auto w-[65rem] max-w-full">
          <section className="py-12 flex justify-between items-center gap-9 md:flex-col-reverse overflow-hidden">
            <div className="w-[37rem] max-w-full flex flex-col gap-[2.125rem]">
              <h1 className="text-[2.125rem]/[2.25rem] font-semibold dark:text-title text-body animate-fade-in-left md:delay-200 fill-mode-forwards opacity-0">
                {t('hero.title01')}{' '}
                <span className="text-primary">{t('hero.title02')} </span>
                {t('hero.title03')}
                <br />
                <span className="text-primary">{t('hero.title04')}</span>
              </h1>
              <div className="animate-fade-in-left delay-200 md:[animation-delay:400ms] fill-mode-forwards opacity-0">
                <P>{t('hero.descripiton')}</P>
              </div>
              <SocialCard className="animate-fade-in-left [animation-delay:400ms] md:[animation-delay:600ms] fill-mode-forwards opacity-0" />
            </div>
            <Image
              alt="Hero Image"
              src="/hero-image.png"
              height={298}
              width={410}
              sizes="100%"
              priority={true}
              className="w-[25.625rem] h-[18.625rem] sm:w-full md:animate-fade-in-left md:fill-mode-forwards sm:h-auto animate-fade-in-right delay-100 fill-mode-forwards opacity-0"
            />
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
              <Image
                alt="About Image"
                src="/about-image.png"
                height={377}
                width={400}
                sizes="100%"
                className="w-[25rem] h-[23.5625rem] sm:w-full sm:h-auto"
                priority={true}
              />
              <div className="flex max-w-full flex-col gap-3 w-[32.375rem]">
                <P>{t('about.about01')}</P>
                <P>{t('about.about02')}</P>
                <P>{t('about.about03')}</P>
                <P>{t('about.about04')}</P>
              </div>
            </div>
          </Section>
          <Section id="projects" title={t('projects.name')}>
            <ProjectsCarousel data={data} locale={locale} />
            <h3 className="dark:text-title text-body text-[1.625rem]/[1.625rem] font-medium">
              {t('projects.development')}
            </h3>
            <div className="w-[50.375rem] gap-5 2md:w-full flex flex-wrap justify-center">
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
      <div className="px-6 z-0 bg-gray-800 relative overflow-hidden flex items-center justify-center">
        <section
          id="contact"
          className="mx-auto  w-[65rem] max-w-full py-20 flex items-center flex-col text-center"
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
          <SocialCard buttonClassName="text-gray-500" />
        </section>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.4}
          duration={1.5}
          repeatDelay={0.3}
          className={cn(
            'text-primary/80 -z-10 [mask-image:radial-gradient(700px_circle_at_center,transparent,transparent_20%,white)]',
            'inset-x-0 inset-y-[-50%] h-[200%] skew-y-12 ',
            'md:[mask-image:radial-gradient(400px_circle_at_center,transparent,transparent_20%,white)]',
          )}
        />
      </div>
      <Footer />
    </main>
  )
}
