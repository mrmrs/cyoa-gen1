export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export const randomBool = (percentile = 1 / 2) =>
  Math.random() < percentile
export const randomNumber = (min, max) =>
  Math.random() * (max - min) + min
