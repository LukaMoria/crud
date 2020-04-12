
import { mount, createLocalVue, createWrapper, shallowMount } from '@vue/test-utils'
import editDialog from '../../../src/components/editDialog.vue'
import Words from '../../../src/pages/Words.vue'
import * as All from 'quasar'
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar  } = All

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

    const createCmp = propsData => mount(editDialog, { localVue, propsData });

    describe('Properties', () => {
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
    
        it('Checks shapshot', () => {
            const cmp = createCmp({
                openEditDialog:true,
                currentEditableWord:{
                    russian: 'Дом',
                    english: 'House'
                }
            })
            expect(cmp.element).toMatchSnapshot();
        })
    })

    describe('Events', () => {
        

        it('handles click on save button', () => {
            const cmp = createCmp({
                openEditDialog:true,
                currentEditableWord:{
                    russian: 'Дом',
                    english: 'House'
                }
            })

            const bodyWrapper = createWrapper(document.body)
            const spy = spyOn(cmp.vm, "save");
            console.log(bodyWrapper.html())
            console.log(bodyWrapper.find('.q-dialog'))
            const w = document.querySelector('.q-dialog')
            const t = createWrapper(w.__vue__)
            console.log(t.html())
            const el = t.find('#save').trigger("click");
            expect(cmp.vm.save).toBeCalled();
        })

    })
    
})