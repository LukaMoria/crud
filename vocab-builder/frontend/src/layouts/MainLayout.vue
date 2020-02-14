<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated>
      <q-toolbar>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {

    }
  }
}
</script>
