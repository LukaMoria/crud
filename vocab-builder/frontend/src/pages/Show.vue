<template>
  <q-page padding>
    <h3>Show Word</h3>

    <div>
      <div class="input-wrapper">
       <q-input outlined :value="word" readonly>
         <template v-slot:prepend>
          <q-icon name="flag"></q-icon>
          <span>Russian:</span>
        </template>
       </q-input>
      </div>
      <div class="input-wrapper">
       <q-input outlined :value="word" readonly>
         <template v-slot:prepend>
          <q-icon name="flag"></q-icon>
          <span>English:</span>
        </template>
       </q-input>
      </div>
    <div>

    <div class="actions">
      <router-link :to="`/words/${this.$route.params.id}/edit`">
        Edit word
      </router-link>
    </div>
    </div>
    </div>
  </q-page>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'show',
  data() {
    return {
      word: 'qweqweqeqwewq'
    };
  }
};
</script>

<style>
  .input-wrapper{
    width:500px;
  }
</style>
