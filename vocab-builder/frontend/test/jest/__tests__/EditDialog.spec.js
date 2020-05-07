
import { mount, createLocalVue, createWrapper, shallowMount } from '@vue/test-utils'
import editDialog from '../../../src/components/editDialog.vue'
import * as All from 'quasar'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('editDialog.spec.js', () => {

    const localVue = createLocalVue()
    //Инициализация локального экземпляра Vue
    localVue.use(Quasar, { components }) 

    const createCmp = propsData => shallowMount(editDialog, { localVue, propsData });

    describe('checking identity of params', () => {
        it('Checks identity editable word', () => {
            const cmp = createCmp({
                openEditDialog:true,
                currentEditableWord:{
                    russian: 'Дом',
                    english: 'House'
                }
            })
            expect(cmp.props('currentEditableWord').russian).toBe('Дом')
            expect(cmp.props('currentEditableWord').english).toBe('House')
        })

        it('Checks identity of prop and local editable Russian word', () => {
            const cmp = createCmp({
                openEditDialog:true,
                currentEditableWord:{
                    russian: 'Дом',
                    english: 'House'
                }
            })
            expect(cmp.vm.currentEditableWord.russian).toBe(cmp.props('currentEditableWord').russian)
        })

        it('Checks identity of prop and local editable english word', () => {
            const cmp = createCmp({
                openEditDialog:true,
                currentEditableWord:{
                    russian: 'Дом',
                    english: 'House'
                }
            })
            expect(cmp.vm.currentEditableWord.english).toBe(cmp.props('currentEditableWord').english)
        })

        it('checking existing btn save in layout', () => {
            const cmp = createCmp({
                openEditDialog:true,
                currentEditableWord:{
                    russian: 'Дом',
                    english: 'House'
                }
            })
            expect(cmp.contains('#save')).toBe(true)
        })

        it('checking existing btn cancel in layout', () => {
            const cmp = createCmp({
                openEditDialog:true,
                currentEditableWord:{
                    russian: 'Дом',
                    english: 'House'
                }
            })
            expect(cmp.contains('#cancel')).toBe(true)
        })

        it('create snapshot', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const cmp = mount(editDialog, {
                localVue,
                propsData:{
                    openEditDialog:true,
                    currentEditableWord:{
                        russian: 'Дом',
                        english: 'House'
                    }
                },
                attachTo: div,
            })

            expect(cmp.html()).toMatchSnapshot()
        })
    })
})