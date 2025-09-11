import { useTranslations } from 'next-intl'
import BestChoiceImage1 from '@/assets/BestChoiceItem1.png'
import BestChoiceImage2 from '@/assets/BestChoiceItem2.png'
import BestChoiceImage3 from '@/assets/BestChoiceItem3.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'
import Image, { StaticImageData } from 'next/image'
import BestChoiceIcon from '../../public/best-choice-icon.svg'

const bestChoiceMenuItems: BestChoiceMenuItem[] = [
  {
    id: 1,
    image: BestChoiceImage1,
    title: 'Gebratener Reis mit gemischten Zutaten',
  },
  {
    id: 2,
    image: BestChoiceImage2,
    title: 'Klebreis mit Mango',
  },
  {
    id: 3,
    image: BestChoiceImage3,
    title: 'Pad Thai',
  },
  {
    id: 4,
    image: BestChoiceImage1,
    title: 'Gebratener Reis mit gemischten Zutaten',
  },
  {
    id: 5,
    image: BestChoiceImage2,
    title: 'Klebreis mit Mango',
  },
  {
    id: 6,
    image: BestChoiceImage3,
    title: 'Pad Thai',
  },
]

interface BestChoiceMenuItem {
  id: number
  image: StaticImageData
  title: string
}

export function BestChoiceMenu() {
  const t = useTranslations('menu')
  return (
    <section id="best-choice-menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground text-center">
          {t('title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance text-center md:mb-10 mb-5">
          {t('subtitle')}
        </p>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {bestChoiceMenuItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/3 relative p-5">
                <Image
                  src={BestChoiceIcon}
                  alt="Best Choice Icon"
                  className="absolute top-11 right-11 md:w-32 md:h-32 w-24 h-24 translate-x-1/2 -translate-y-1/2"
                />
                <Image src={item.image} alt={item.title} />
                <h3 className="font-hs-mische font-bold text-lg text-primary mb-1 mt-5">
                  {item.title}
                </h3>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
