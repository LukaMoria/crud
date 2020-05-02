/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { createLocalVue, shallowMount } from '@vue/test-utils'
import { render, renderToString } from '@vue/server-test-utils'
import * as All from 'quasar'
import Show from '../../../src/pages/Show.vue'
const { Quasar } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('Mount Show page', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) 
  const wrapper = shallowMount(Show, {
    localVue,
  })
  const vm = wrapper.vm

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('check data option', async () => {
    wrapper.setData({
        word: {
            english: 'rat', 
            russian: 'крыса' 
        }
    })
    expect(wrapper.vm.word.english).toBe('rat')
    expect(wrapper.vm.word.russian).toBe('крыса')
  })

  it('render', async () => {
    const q = await renderToString(Show)
    expect(q).toContain('q-page')
  })
})
