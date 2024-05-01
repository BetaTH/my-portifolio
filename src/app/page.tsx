import { SkillCard } from '@/components/cards/skill-card'
import { Section } from '@/components/section'
import { AboutImage } from '@/components/svg-components/about-image'
import { HeroImage } from '@/components/svg-components/hero-image'
import { skills } from '@/lib/utils/skill-data'

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
          <Section id="skills" title="Skills">
            <div className="grid grid-cols-5 pt-5 gap-[3.125rem] w-fit mx-auto">
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </Section>
          <Section id="about" title="About Me">
            <div className="w-full flex gap-[3.75rem] items-center">
              <AboutImage className="w-[25rem] h-[23.5625rem]" />
              <div className="flex flex-col gap-3 text-base/5 font-sans w-[32.375rem] text-body-text">
                <p>
                  Com uma paixão por resolver problemas e criar soluções
                  eficientes iniciei minha jornada profissional em 2021 como
                  analista de dados, mas foi em 2023 que descobri minha
                  verdadeira vocação no desenvolvimento web.
                </p>
                <p>
                  Desde então, mergulhei de cabeça nesse universo fascinante e
                  tenho me encantado com cada linha de código que escrevo.
                  Sempre fui movido pelo desafio de encontrar as melhores
                  soluções, evitando ao máximo a criação de complexidades
                  desnecessárias.
                </p>
                <p>
                  Atualmente, atuo como desenvolvedor web e analista de dados
                  freelancer, buscando constantemente aprimorar minhas
                  habilidades e expandir meu conhecimento. Fora do mundo
                  profissional, dedico meu tempo à leitura, à prática de
                  atividades físicas e simplesmente desfrutando de momentos de
                  tranquilidade.
                </p>
                <p>
                  Estou sempre aberto a novas oportunidades e desafios
                  emocionantes.
                </p>
              </div>
            </div>
          </Section>
          {/* <Section id="experience" title="My Experience"></Section> */}
        </div>
      </div>
    </main>
  )
}
