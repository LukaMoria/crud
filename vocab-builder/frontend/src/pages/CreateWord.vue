<template>
  <q-page padding>
    <h3>Create Word</h3>
    <div>
      <div class="input-wrapper">
       <q-input outlined v-model="word.russian">
         <template v-slot:prepend>
          <q-icon name="flag"></q-icon>
          <span>Russian:</span>
        </template>
       </q-input>
      </div>
      <div class="input-wrapper">
       <q-input outlined v-model="word.english">
         <template v-slot:prepend>
          <q-icon class="padding" name="flag"></q-icon>
          <span>English:</span>
        </template>
       </q-input>
      </div>
      <div class="flex justify-center q-pa-md">
        <q-btn class="glossy" rounded color="deep-orange" label="Create Word" @click="createWord"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name:'ShowWord',
  data () {
    return {
      word: {
        english: '',
        russian: ''
      },
      baseUrl: 'http://localhost:3000/words/'
    }
  },
  methods:{
    async createWord(){
      const word = (await this.$axios.post(this.baseUrl, this.word))
      if (word) this.$q.notify({message:'Success!'})
    }
  }
}
</script>
