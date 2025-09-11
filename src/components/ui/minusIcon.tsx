export function MinusIcon({ onClick }: { onClick: () => void }) {
  return (
    <span
      className="bg-white font-light text-black rounded-lg md:w-9 md:h-9 w-6 h-6 flex items-center justify-center text-lg font-sf-pro cursor-pointer"
      onClick={onClick}
    >
      -
    </span>
  )
}
