'use client'
import { Button } from '@/components/buttons/button'
import { ProjectCard } from '@/components/cards/project-card'
import { ChevronLeft } from '@/components/svg-components/chevron-left'
import { ChevronRight } from '@/components/svg-components/chevron-right'
import { Locale } from '@/lib/locale/server'
import { PortfolioData } from '@/lib/types/portfolio-data'
import { cn } from '@/lib/utils/cn'
import { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'

export function ProjectsCarousel({
  data,
  locale,
}: {
  data: PortfolioData
  locale: Locale
}) {
  const carouselRef = useRef<Slider | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const settings = {
    className: 'center',
    dots: false,
    initialSlide: 0,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 729,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  } satisfies Settings

  return (
    <div className="relative w-full px-10 sm:px-0 sm:gap-6 flex-col flex gap-2 justify-center">
      <Slider
        beforeChange={(_, nextSlide) => setCurrentSlide(nextSlide)}
        ref={carouselRef}
        {...settings}
        className="px-2 sm:px-0 w-full "
      >
        {data.projects.map((project, idx) => {
          return (
            <div key={project.title}>
              <ProjectCard
                variant={idx % 2 === 0 ? 'primary' : 'secondary'}
                project={project}
                locale={locale}
                className="mx-2"
              />
            </div>
          )
        })}
      </Slider>
      <Button
        className="absolute sm:bottom-0 left-0 sm:left-2 rounded-full p-2 sm:rounded-full"
        onClick={() => carouselRef.current?.slickPrev()}
      >
        <ChevronLeft className="size-5 sm:size-7" />
      </Button>
      <div className="flex w-full items-center justify-center h-9 gap-2">
        {data.projects.map((project, idx) => {
          return (
            <Button
              key={project.title}
              onClick={() => carouselRef.current?.slickGoTo(idx)}
              data-active={idx === currentSlide}
              className={cn(
                'w-3 h-3 p-0 rounded-full data-[active=true]:w-8 sm:data-[active=true]:w-6 data-[active=true]:bg-primary',
              )}
            />
          )
        })}
      </div>

      <Button
        className="absolute right-0 sm:right-2 sm:bottom-0 rounded-full sm:rounded-full p-2"
        onClick={() => carouselRef.current?.slickNext()}
      >
        <ChevronRight className="size-5 sm:size-7" />
      </Button>
    </div>
  )
}
