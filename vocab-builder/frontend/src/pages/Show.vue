<template>
  <q-page padding class="flex  items-center column">
    <h3>Show Word</h3>

    <div>
      <div class="input-wrapper">
       <q-input outlined :value="word.russian" readonly>
         <template v-slot:prepend>
          <q-icon name="flag"></q-icon>
          <span>Russian:</span>
        </template>
       </q-input>
      </div>
      <div class="input-wrapper">
       <q-input outlined :value="word.english" readonly>
         <template v-slot:prepend>
          <q-icon class="padding" name="flag"></q-icon>
          <span>English:</span>
        </template>
       </q-input>
      </div>
      <div>
    </div>
    </div>
  </q-page>
</template>

<script>
import { api } from '../helpers/helpers';
import EditDialog from '../components/editDialog.vue'

export default {
  name: 'show',
  components:{
    EditDialog
  },
  data() {
    return {
      word: ''
    };
  },
  async created () {
    this.word = (await this.$axios.get(`http://localhost:3000/words/${this.$route.params.id}`)).data
  }
};
</script>

<style>
  .input-wrapper{
    width:80vw;
  }

</style>
