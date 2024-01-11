import { PropsWithChildren } from 'react'
import clsx from 'clsx/lite'

type ButtonProps = PropsWithChildren & {
  type?: 'primary' | 'secondary'
  theme?: 'auto' | 'light' | 'dark'
  // size?: 'large' | 'small'
}

function Button({
  children,
  type = 'primary',
  theme = 'auto',
  // size = 'large',
}: ButtonProps) {
  const className = clsx(
    'transition rounded-full text-xl/[1.2] font-medium',
    // size === 'large'
    //   ? 'py-[18px] px-[42px] text-[20px]/[1.2]' // large
    //   : 'py-[12px] px-[32px] text-[18px]/[1.2]', // small
    'py-[12px] px-[32px] text-[18px]/[1.2] xl:py-[18px] xl:px-[42px] xl:text-[20px]/[1.2]',
    theme !== 'auto'
      ? theme === 'dark'
        ? 'text-white border border-white60 hover:border-white' // forced dark
        : type === 'primary'
          ? 'bg-blue hover:bg-deepblue text-white' // forced light primary
          : 'bg-blue12 hover:bg-blue16 text-deepblue' // forced light secondary
      : type === 'primary'
        ? 'bg-blue dark:bg-inherit hover:bg-deepblue text-white dark:text-white dark:border dark:border-white60' // auto themed primary
        : 'bg-blue12 dark:bg-inherit hover:bg-blue16 text-deepblue dark:text-white dark:border dark:border-white60', // auto themed secondary
  )

  return <button className={className}>{children}</button>
}

export default Button
