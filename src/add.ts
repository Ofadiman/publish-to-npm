export const add = (a: number, b: number): number => {
  if (a === b) {
    throw new Error('illegal operation')
  }
  return a + b
}
