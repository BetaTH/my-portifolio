import { Section } from '@/components/section'
import { HeroImage } from '@/components/svg-components/hero-image'

export default function Home() {
  return (
    <main className="bg-body pt-[4.75rem]">
      <div className="px-6">
        <div className="mx-auto w-[65rem] max-w-full">
          <section className="py-12 flex justify-between items-center">
            <div className="w-[37rem] flex flex-col gap-[2.125rem]">
              <h1 className="text-[2.125rem]/[2.25rem] font-semibold text-title">
                Olá,{' '}
                <span className="text-primary">Thielson Almendra aqui!</span>
                <br />
                <span className="text-primary">Desenvolvedor Full Stack</span>
              </h1>
              <p className="text-base text-body-text font-sans">
                Com experiência, principalmente no desenvolvimento front-end de
                páginas web, também tenho desenvolvido funcionalidades no
                back-end. Sempre em busca de novos desafios, compartilho aqui
                alguns dos projetos nos quais tenho trabalhado durante essa
                jornada. Fique a vontade para explorar e descobrir um pouco mais
                sobre mim!!
              </p>
            </div>
            <HeroImage className="w-[25.625rem] h-[18.625rem]" />
          </section>
          <Section id="skills" title="Skills"></Section>
          <Section id="about" title="About Me"></Section>
          <Section id="experience" title="My Experience"></Section>
        </div>
      </div>
    </main>
  )
}
