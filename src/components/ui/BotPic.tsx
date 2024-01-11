interface BotPicProps {
  src: string
  alt: string
}

function BotPic({ src, alt }: BotPicProps) {
  return (
    <div className="w-[63px] h-[63px] xl:w-24 xl:h-24 border-white dark:border-dark border-2 xl:border-4 rounded-full overflow-hidden">
      <img src={src} alt={alt} />
    </div>
  )
}

export default BotPic
