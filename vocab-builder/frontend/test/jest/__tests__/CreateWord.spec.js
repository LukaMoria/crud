import { mount, createLocalVue, createWrapper, shallowMount } from '@vue/test-utils'
import CreateWord from '../../../src/pages/CreateWord.vue'
import * as All from 'quasar'

const { Quasar } = All

jest.useFakeTimers()

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})


describe('Create Word page', () => {
    const localVue = createLocalVue();
    localVue.use(Quasar,  { components })
    const wrapper = shallowMount(CreateWord, {
        localVue
    })
    const createCmp = propsData => shallowMount(CreateWord, { localVue, propsData });

    it('createSnapshot', () => {
        const cmp = createCmp()
        cmp.setData({
            word: {
                english: 'house',
                russian: 'Дом'
            }
        })
        expect(cmp.html()).toMatchSnapshot()
    })

    it('async request by click checking type of word', done => {
        const wrapper = shallowMount(CreateWord, {localVue})
        wrapper.find('.glossy').trigger('click')
        wrapper.vm.$nextTick(() => {
          expect(typeof wrapper.vm.word).toBe('object')
          done()
        })
    })

    it('check identity of data', () => {
        const cmp = createCmp()
        cmp.setData({
            word: {
                english: 'house',
                russian: 'Дом'
            }
        })
        expect(cmp.vm.word.english).toBe('house')
        expect(cmp.vm.word.russian).toBe('Дом')
    })

    it('set propsData', () => {
        const cmp = createCmp({
            propsData: {
                word:{
                    english: 'house',
                    russian: 'Дом'
                }
            }
        })
        console.log(cmp.html())
        expect(cmp.contains('[label="Create Word"]')).toBe(true)
    })


})