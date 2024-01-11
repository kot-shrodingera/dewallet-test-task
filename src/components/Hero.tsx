import phone from '../assets/img_phone.png'
import phoneDark from '../assets/img_phone_dark.png'
import bot1 from '../assets/bot1.jpeg'
import bot2 from '../assets/bot2.jpeg'
import bot3 from '../assets/bot3.jpeg'
import bot4 from '../assets/bot4.jpeg'
import bot5 from '../assets/bot5.jpeg'
import Button from './ui/Button'
import BotPic from './ui/BotPic'
import useDarkMode from '../hooks/useDarkMode'

function Hero() {
  const darkMode = useDarkMode()

  return (
    <div className="flex flex-col xl:flex-row xl:justify-between items-center pb-8 xl:py-5">
      <div className="flex flex-col gap-6 xl:gap-14 py-5 xl:py-0 items-center xl:items-start">
        <div className="flex flex-col gap-6 xl:gap-8 text-center xl:text-left">
          <h1 className="dark:text-blue">
            Crypto payments for <span className="text-blue">telegram bots</span>
          </h1>
          <div className="flex flex-col gap-2 xl:gap-8 items-center xl:items-start">
            <h2>
              Seamlessly accept crypto payments
              <br />
              in your Telegram bots and services.
            </h2>
            <Button theme="light">Get started</Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 xl:gap-4 items-center xl:items-start">
          <div className="flex [&>*:not(:first-child)]:ml-[-16px] xl:[&>*:not(:first-child)]:ml-[-32px]">
            <BotPic src={bot1} alt="bot1" />
            <BotPic src={bot2} alt="bot2" />
            <BotPic src={bot3} alt="bot3" />
            <BotPic src={bot4} alt="bot4" />
            <BotPic src={bot5} alt="bot5" />
          </div>
          Popular bots use Crypto Pay
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src={darkMode ? phoneDark : phone}
          alt="logo"
          className="w-[488px] h-[700px] object-cover" // TODO: Как указать, чтобы ширина была равной источнику, высота не больше 700px и object-cover
        />
      </div>
    </div>
  )
}

export default Hero
