<template>
<div if="visible">
  <p class="textContent">{{ input }}</p>
  <span>{{ counter }}</span>
  <q-btn id="mybutton" @click="increment()"></q-btn>
</div>
</template>

<script>
export default {
  name: 'QBUTTON',
  props:{
    visible: Boolean,
    required: false,
  },
  data () {
    return {
      counter: 0,
      input: 'rocket muffin'
    }
  },
  methods: {
    increment () {
      this.counter++
    }
  }
}
</script>
