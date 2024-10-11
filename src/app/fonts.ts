import { Rubik } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'
import { Fugaz_One } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
})

const fugaz_one = Fugaz_One({
  weight: ["400"],
  subsets: ['latin'],
  variable: '--font-fugazone',
})

export const fonts = {
  rubik,
  bebas_neue,
  fugaz_one
}