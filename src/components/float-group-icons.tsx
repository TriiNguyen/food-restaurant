import { FloatIcon } from './ui/floatIcon'
import Image from 'next/image'
import call from '../../public/call.svg'
import bag from '../../public/bag-2.svg'

export function FloatGroupIcons({
  setIsShowPreOrder,
}: {
  setIsShowPreOrder: (isShowPreOrder: boolean) => void
}) {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4">
      <FloatIcon icon={<Image src={call} alt="Phone" width={24} height={24} />} />
      <div onClick={() => setIsShowPreOrder(true)}>
        <FloatIcon icon={<Image src={bag} alt="Phone" width={24} height={24} />} />
      </div>
    </div>
  )
}
