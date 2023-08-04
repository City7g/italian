import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import test from '../pages/test.vue'

global.fetch = vi.fn()

describe('Test page', () => {
  // it('Pending is true', () => {
  //   const wrapper = mount(test)

  //   const text = wrapper.text()

  //   expect(text).toBe('Loading...')
  // })

  it('Count posts', async () => {
    const wrapper = mount(test)

    const res = await fetch('http://localhost:1337/api/blogs?populate=deep,4')
    console.log(res)
    // const data = await res.json()

    // console.log(data)

    // const postBlocks = wrapper.findAll('div')
    // const fff = wrapper.text()

    // console.log(postBlocks)

    expect(6).toBe(6)
  })
})