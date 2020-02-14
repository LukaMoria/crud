<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="header bg-secondary flex">
        <nav class="navigation flex items-center justify-center self-center">
          <q-icon name="thumb_up"></q-icon>
          <a href="" class="flex">
            <picture>
              <img src="" alt="Words">
            </picture>
            <span>Words</span>
          </a>
          <a href="" class="flex">
            <picture>
              <img src="" alt="New word">
            </picture>
            <span>New</span>
          </a>
          <a href="" class="flex">
            <picture>
              <img src="" alt="test">
            </picture>
            <span>Test</span>
          </a>
        </nav>
    </q-header>
    <q-btn icon="thumbs_up" />
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
  }
</style>
