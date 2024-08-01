//font.js
import { Roboto, Montserrat } from 'next/font/google'

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
})

const montserrat_init = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-montserrat',
})

export const roboto = roboto_init.className
export const montserrat = montserrat_init.className