<template>
  <q-page>
    <h1>Words</h1>
    <q-markup-table id="words">
      <template>
        <thead>
          <tr>
            <th>English</th>
            <th>German</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </template>
      <template>
        <tbody>
          <tr v-for="(word,i) in words" :key="i">
            <td class="text-left">{{words.english}}</td>
            <td class="text-right">{{words.german}}</td>
            <td width="75" class="center aligned">Show</td>
            <td width="75" class="center aligned">Edit</td>
            <td width="75" class="center aligned">Destroy</td>
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
      words: []
    }
  },
  async mounted(){
    this.words = await api.getWords();
  }
}
</script>
