import { describe, expect, test } from 'vitest'
import { add } from './add'

describe('add function', () => {
  test('should add 2 numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
