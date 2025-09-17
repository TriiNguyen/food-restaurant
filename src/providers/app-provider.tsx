'use client'

import { FloatGroupIcons } from '@/components/float-group-icons'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import FoodImage from '@/assets/Menu/Food1.png'
import Image from 'next/image'
import { MinusIcon } from '@/components/ui/minusIcon'
import { AddIcon } from '@/components/ui/addIcon'
import { Button } from '@/components/ui/button'
const foodList = [
  {
    id: 1,
    name: 'Frühlingsrollen',
    price: '10.37 $',
    image: FoodImage,
  },
  {
    id: 2,
    name: 'Frühlingsrollen',
    price: '10.37 $',
    image: FoodImage,
  },
  {
    id: 3,
    name: 'Frühlingsrollen',
    price: '10.37 $',
    image: FoodImage,
  },
  {
    id: 4,
    name: 'Frühlingsrollen',
    price: '10.37 $',
    image: FoodImage,
  },
]

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isShowPreOrder, setIsShowPreOrder] = useState(false)
  console.log(isShowPreOrder)
  return (
    <>
      {children}
      <FloatGroupIcons setIsShowPreOrder={setIsShowPreOrder} />
      <div
        className={`fixed z-50 top-0 left-0 w-full h-[100vh] bg-black transform transition-transform duration-300 md:hidden ${
          isShowPreOrder ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="text-white text-2xl font-normal font-hs-mische flex items-center justify-between p-4 border-b border-muted-foreground ">
          <ArrowLeft onClick={() => setIsShowPreOrder(false)} className="text-muted-foreground" />
          <span>Menu</span>
          <ArrowRight className="invisible" />
        </div>
        <div className="flex flex-col gap-4 p-4 mt-1 overflow-y-auto max-h-[calc(100vh-185px)]">
          {foodList.map((food) => (
            <div
              key={food.id}
              className="flex items-start gap-4 py-6 border-b border-muted-foreground justify-between"
            >
              <div className="flex  gap-4">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={80}
                  height={80}
                  className="w-16 h-16 rounded-xl"
                />
                <span className="text-white text-lg font-bold font-sf-pro">{food.name}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white text-lg font-bold font-sf-pro">{food.price}</span>
                <div className="flex items-center gap-2">
                  <MinusIcon onClick={() => {}} />
                  <span>1</span>
                  <AddIcon onClick={() => {}} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-center justify-between p-4 fixed bottom-0 left-0 right-0">
          <div className="flex items-center justify-between w-full">
            <span className="text-white text-lg font-bold font-sf-pro">Total</span>
            <span className="text-primary text-2xl font-bold font-sf-pro">10.37 $</span>
          </div>
          <Button variant="default" className="w-full">
            Checkout
          </Button>
        </div>
      </div>
    </>
  )
}
