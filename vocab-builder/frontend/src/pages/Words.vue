<template>
  <q-page padding>
    <h3>Words</h3>
    <transition appear enter-active-class="animated slideInUp" v-if="words.length>0">
      <q-markup-table id="words" style="animation-duration: .4s;">
      <template>
        <thead>
          <tr>
            <th>№</th>
            <th>English</th>
            <th>Russian</th>
            <th colspan="3">Actions {{words.length}}</th>
          </tr>
        </thead>
      </template>
      <template>
          <transition-group  tag="tbody" leave-to-class="animated slideOutLeft">
            <tr v-for="(item, index) in words" :key="item['_id']">
              <td class="text-center">{{index+1}}</td>
              <td class="text-center"> {{ item['english'] }}</td>
              <td class="text-center"> {{ item['russian'] }}</td>
              <td width="75" class="center aligned">
                <router-link :to="`/words/${item._id}`">Show</router-link>
              </td>
              <td width="75" class="text-center aligned" @click="openingModal(item['_id'])">
                <q-icon name="edit" class="link"></q-icon>
              </td>
              <td width="75" class="text-center aligned" @click="deleteItem(item['_id'])">
                <q-icon name="delete_forever"></q-icon>
              </td>
            </tr>
          </transition-group>
      </template>
    </q-markup-table>
    </transition>
    <edit-dialog
      :currentEditableWord="currentEditableWord"
      :openEditDialog="openEdit"
      @close-popup="closePopup"
      @update-word="updateWord"
    />
  </q-page>
</template>

<script>

import { api } from '../helpers/helpers.js'
import  baseUrl  from '../helpers/consts.js'
import EditDialog from '../components/editDialog.vue'
import { Notify } from 'quasar'

export default {
  name: 'Words',
  data () {
    return {
      words: [],
      openEdit:false,
      currentEditableWord:{},
    }
  },
  components:{
    EditDialog
  },
  methods:{
    openingModal(id){
      this.currentEditableWord = this.words.find(obj => obj._id === id)
      this.openEdit = true
    },
    closePopup(payload){
      this.openEdit = false
    },
    updateWord(payload){
      console.log(payload)
      this.$axios.put(`${baseUrl+payload._id}`, payload)
        .then((res) => {
          this.$q.notify({position:'top-right', message:`Word ${payload.english} has been updated`})
        })
      const ind = this.words.findIndex(obj => obj._id === payload._id)
      console.log(ind)
      this.words.splice(ind, 1, payload)
      this.openEdit = false
    },
    deleteItem(id){
      this.$axios.delete(`${baseUrl}${id}`)
        .then(res => this.$q.notify({
          position:'top-right',
          color:'red',
          message:'Word has been deleted'
        }))
      const index = this.words.findIndex(elem => elem._id === id)
      console.log(index)
      this.words.splice(index, 1)
    }
  },
  async created(){
    this.words = (await this.$axios.get(`${baseUrl}`)).data
  }
}
</script>

<style>
  .link{
    cursor: pointer;
  }
  .link:hover{
    color:green
  }
</style>
