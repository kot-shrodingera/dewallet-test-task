import logo from '../assets/logo.svg'
import logoSmall from '../assets/logo_small.svg'
import modeLight from '../assets/mode_light.svg'
import modeLightSmall from '../assets/mode_light_small.svg'
import modeDark from '../assets/mode_dark.svg'
import modeDarkSmall from '../assets/mode_dark_small.svg'
import useDarkMode, { toggleDarkMode } from '../hooks/useDarkMode'
import Button from './ui/Button'

function Header() {
  const darkMode = useDarkMode()

  return (
    <div className="flex justify-between items-center pt-11 pb-5 xl:py-10">
      <div className="h-16 xl:w-[250px] flex items-center">
        <picture>
          <source media="(min-width: 1240px)" srcSet={logo} />
          <source srcSet={logoSmall} />
          <img src={logo} alt="logo" />
        </picture>
      </div>
      <div className="hidden xl:flex flex-1 justify-center items-center gap-8 text-[20px]/[1.2] font-medium">
        <span className="hover:cursor-pointer">Use cases</span>
        <span className="hover:cursor-pointer">Features</span>
        <span className="hover:cursor-pointer">How to start</span>
      </div>
      <div className="w-[250px] flex gap-2 items-center justify-end">
        <picture>
          <source
            media="(min-width: 1240px)"
            srcSet={darkMode ? modeDark : modeLight}
          />
          <source srcSet={darkMode ? modeDarkSmall : modeLightSmall} />
          <img
            src={darkMode ? modeDark : modeLight}
            alt="theme"
            className="hover:cursor-pointer"
            onClick={() => {
              toggleDarkMode()
            }}
          />
        </picture>
        <Button type="secondary">Get Started</Button>
      </div>
    </div>
  )
}

export default Header
