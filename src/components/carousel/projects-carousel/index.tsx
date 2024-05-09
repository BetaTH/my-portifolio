'use client'
import { ProjectCard } from '@/components/cards/project-card'
import { Locale } from '@/lib/locale/server'
import { PortfolioData } from '@/lib/types/portfolio-data'
import Slider, { Settings } from 'react-slick'

export function ProjectsCarousel({
  data,
  locale,
}: {
  data: PortfolioData
  locale: Locale
}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 859,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  } satisfies Settings

  return (
    <Slider {...settings} className="flex gap-6 w-full justify-center">
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
    </Slider>
  )
}
