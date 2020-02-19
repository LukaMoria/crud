<template>
    <q-dialog v-model="openEditDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Редактирование</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="localWord.english" autofocus @keyup.enter="prompt = false"></q-input>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="localWord.russian" autofocus @keyup.enter="prompt = false"></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отмена" @click="cancel"></q-btn>
          <q-btn flat label="Сохранить" @click="save"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>

export default {
  name:'EditDialog',
  props:{
    openEditDialog:{
      type: Boolean,
      required: true
    },
    currentEditableWord:{
      type:Object,
      required:true
    }
  },
  data(){
    return {
        localWord: Object.assign({},this.currentEditableWord)
    }
  },
  methods: {
    cancel () {
      this.$emit('close-popup', false)
    },
    save () {
      this.$emit('update-word', this.localWord)
    }
  },
  watch:{
    currentEditableWord: function(val){
      this.localWord = Object.assign({}, this.currentEditableWord)
    }
  }
}
</script>

<style>

</style>
