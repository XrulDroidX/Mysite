import { describe, it, expect } from 'vitest'
import fs from 'node:fs'

describe('project structure', () => {
  it('has content posts', () => {
    expect(fs.existsSync('content/posts')).toBe(true)
  })
})
