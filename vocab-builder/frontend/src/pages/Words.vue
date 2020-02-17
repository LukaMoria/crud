<template>
  <q-page>
    <h3>Words</h3>
    <q-markup-table id="words">
      <template>
        <thead>
          <tr>
            <th>№</th>
            <th>English</th>
            <th>Russia</th>
            <th class="center aligned">1</th>
            <th class="center aligned">2</th>
            <th class="center aligned"> {{words.length}}</th>
          </tr>
        </thead>
      </template>
      <template>
        <tbody>
          <tr v-for="(item, index) in words" :key="index">
            <td class="text-center">{{index+1}}</td>
            <td class="text-center"> {{ item['english'] }}</td>
            <td class="text-center"> {{ item['russian'] }}</td>
            <td width="75" class="center aligned">
              <router-link :to="{name: 'Show', params: {id: item._id}}">Show</router-link>
            </td>
            <td width="75" class="center aligned"> Edit </td>
            <td width="75" class="center aligned"> Destroy </td>
          </tr>
        </tbody>
      </template>
    </q-markup-table>
  </q-page>
</template>

<script>

import { api } from '../helpers/helpers.js'

export default {
  name: 'Words',
  data () {
    return {
      words: [ { english:'Cap', russian: 'Чашка' } ]
    }
  },
  async mounted(){
    this.words = await api.getWords();
  }
}
</script>
