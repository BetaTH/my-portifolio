import { SkillCard } from '@/components/cards/skill-card'
import { SocialCard } from '@/components/cards/social-card'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Section } from '@/components/section'
import { AboutImage } from '@/components/svg-components/about-image'
import { HeroImage } from '@/components/svg-components/hero-image'
import { IconEmail } from '@/components/svg-components/icon-email'
import { skills } from '@/lib/utils/skill-data'

export default function Home() {
  return (
    <main id={'home'} className="bg-body pt-[4.75rem]">
      <Header />
      <div className="px-6">
        <div className="mx-auto w-[65rem] max-w-full">
          <section className="py-12 flex justify-between items-center">
            <div className="w-[37rem] flex flex-col gap-[2.125rem]">
              <h1 className="text-[2.125rem]/[2.25rem] font-semibold text-title">
                Olá, <span className="text-primary">Thielson Almendra </span>
                aqui!
                <br />
                <span className="text-primary">Desenvolvedor Full Stack</span>
              </h1>
              <p className="text-base text-body-text font-sans tracking-[0.015em]">
                Com experiência, principalmente no desenvolvimento front-end de
                páginas web, também tenho desenvolvido funcionalidades no
                back-end. Sempre em busca de novos desafios, compartilho aqui
                alguns dos projetos nos quais tenho trabalhado durante essa
                jornada. Fique a vontade para explorar e descobrir um pouco mais
                sobre mim!!
              </p>
              <SocialCard />
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
            <div className="w-full flex gap-[3.75rem] items-center justify-center">
              <AboutImage className="w-[25rem] h-[23.5625rem]" />
              <div className="flex flex-col gap-3 text-base/5 tracking-[0.015em] font-sans w-[32.375rem] text-body-text">
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
      <div className="px-6 bg-gray-800">
        <section
          id="contact"
          className="mx-auto w-[65rem] max-w-full py-20 flex items-center flex-col text-center"
        >
          <h2 className="text-[2rem]/[2.125rem] text-primary mb">
            Entre em Contato!
          </h2>
          <p className="text-xl/6 text-title max-w-[30.375rem] mt-2 font-sans">
            Sinta-se a vontade para me mandar uma mensagem caso tenha gostado do
            que viu!!
          </p>
          <div className="flex items-center mt-8 gap-5 font-sans">
            <IconEmail className="size-9" />
            <span className="text-title text-4xl tracking-tight">
              thielson12@gmail.com
            </span>
          </div>
          <p className="text-base text-body-text mt-8 mb-3 font-sans">
            Tambem posso ser encontrado nessas plataformas:
          </p>
          <SocialCard />
        </section>
      </div>
      <Footer />
    </main>
  )
}
