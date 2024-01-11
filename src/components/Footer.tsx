import logo from '../assets/logo.svg'
import Button from './ui/Button'

function Footer() {
  return (
    <div className="pt-20 pb-10 text-white flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="w-[163px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden xl:flex flex-1 justify-center items-center gap-8 text-[20px]/[1.2] font-medium">
          <span className="hover:cursor-pointer">Use cases</span>
          <span className="hover:cursor-pointer">Features</span>
          <span className="hover:cursor-pointer">How to start</span>
        </div>
        <Button theme="dark">Get Started</Button>
      </div>
      ©2023 Crypto Bot
    </div>
  )
}

export default Footer
