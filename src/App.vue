<template>
  <div>
    <div>
      <Header></Header>
        <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Include/Header.vue'
import Footer from './components/Include/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

