import { defineConfig } from 'windicss/helpers'

const colors = ['red', 'blue', 'yellow', 'green']

export default defineConfig({
  safelist: [
    colors.map(i => `bg-${i}-50`), // p-1 to p-3
    colors.map(i => `text-${i}-500`), // mt-1 to mt-10
  ],
})
