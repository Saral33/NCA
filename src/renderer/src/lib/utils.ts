import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export const changeEnglishNumberToNepali = (number: number): string => {
  const nepaliNumbers = {
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')'
  }
  const splitWord = number.toString().match(/\S/g) || []

  const convertedNum = splitWord?.map((s) => nepaliNumbers[s] || '')
  return convertedNum.join('')
}
