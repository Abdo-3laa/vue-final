<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />

    <main class="flex-fill">
      <router-view />
    </main>

    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar , Footer},
  
}
</script>

