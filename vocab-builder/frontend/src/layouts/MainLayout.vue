<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="header bg-secondary flex">
        <nav class="navigation flex items-center justify-center self-center">
          <router-link to="/" class="flex justify-center items-center" >
            <q-icon name="mode_comment"></q-icon>
            <span>Words</span>
          </router-link>
          <router-link to="/" class="flex justify-center items-center">
            <q-icon name="add_circle"></q-icon>
            <span>New</span>
          </router-link>
          <router-link to="/" class="flex justify-center items-center">
            <q-icon name="layers"></q-icon>
            <span>Test</span>
          </router-link>
        </nav>
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

<style>
  .header{
    height:75px;
  }
  .navigation{
    height:100%;
    width:100%;
    font-size:16px;
  }

</style>

<style scoped>
  a > * {
    padding: 0 5px;
  }
  a{
    text-decoration: none;
    padding:10px;
  }
</style>
