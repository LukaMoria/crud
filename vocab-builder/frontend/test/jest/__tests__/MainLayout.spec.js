import { mount, createLocalVue, createWrapper, shallowMount } from '@vue/test-utils'
import MainLayout from '../../../src/layouts/MainLayout.vue'
import * as All from 'quasar'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar } = All
//import VueRouter from 'vue-router'

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('MainLayout specs', () => {
    const localVue = createLocalVue()
    //Инициализация локального экземпляра Vue
    localVue.use(Quasar, { components }) 
    //localVue.use(VueRouter)

    const wrapper = mount(MainLayout, {
        localVue,
    })

    it('create and checks snapshot', () => {
        console.log(wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('checks existing link for all words', () => {
        expect(wrapper.contains('router-link[to="/words"]')).toBe(true)
    })

    it('checks link for cteating word', () => {
        expect(wrapper.contains('router-link[to="/words/new"]')).toBe(true)
    })

    it('check link on main page', () => {
        expect(wrapper.contains('router-link[to="/"]')).toBe(true)
    })
})