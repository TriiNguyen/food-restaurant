import { StaticImageData } from 'next/image'

export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string | StaticImageData
  category: string
}

import phoCuon from '@/assets/bun-cha.png'
import mewink from '@/assets/mewink.png'
import nemRan from '@/assets/nem-ran.png'
import goiRan from '@/assets/goi-ran.png'
import repning from '@/assets/goi-ra-muu.png'
import goiRaMuu from '@/assets/goi-ra-muu.png'

import MenuImage1 from '@/assets/Menu/Food1.png'
import MenuImage2 from '@/assets/Menu/Food2.png'
import MenuImage3 from '@/assets/Menu/Food3.png'
import MenuImage4 from '@/assets/Menu/Food4.png'
import MenuImage5 from '@/assets/Menu/Food5.png'
import MenuImage6 from '@/assets/Menu/Food6.png'
import MenuImage7 from '@/assets/Menu/Food7.png'
import MenuImage8 from '@/assets/Menu/Food8.png'
import MenuImage9 from '@/assets/Menu/Food9.png'
import MenuImage10 from '@/assets/Menu/Food10.png'
import MenuImage11 from '@/assets/Menu/Food11.png'
import MenuImage12 from '@/assets/Menu/Food12.png'

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '120 $',
    image: MenuImage1,
    category: 'Appetisers',
  },
  {
    id: 2,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '290 $',
    image: MenuImage2,
    category: 'Main Dishes',
  },
  {
    id: 3,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '180 $',
    image: MenuImage3,
    category: 'Main Dishes',
  },
  {
    id: 4,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '290 $',
    image: MenuImage4,
    category: 'Appetisers',
  },
  {
    id: 5,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '300 $',
    image: MenuImage5,
    category: 'Appetisers',
  },
  {
    id: 6,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',

    price: '390 $',
    image: MenuImage6,
    category: 'Main Dishes',
  },
  {
    id: 7,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '300 $',
    image: MenuImage7,
    category: 'Appetisers',
  },
  {
    id: 8,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '290 $',
    image: MenuImage8,
    category: 'Main Dishes',
  },
  {
    id: 9,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '290 $',
    image: MenuImage9,
    category: 'Appetisers',
  },
  {
    id: 10,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '290 $',
    image: MenuImage10,
    category: 'Main Dishes',
  },
  {
    id: 11,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '290 $',
    image: MenuImage11,
    category: 'Appetisers',
  },
  {
    id: 12,
    name: 'Frühlingsrollen',
    description: 'Bun Cha besteht aus duftend gegrilltem Schweinefleisch (in...',
    price: '290 $',
    image: MenuImage12,
    category: 'Main Dishes',
  },
]
