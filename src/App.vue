<template>
  <NavBar></NavBar>
  <side-bar></side-bar>
  <Content></Content>
  <Footer></Footer>
</template>
<script>
import NavBar from './views/layouts/NavBar'
import SideBar from './views/layouts/SideBar'
import Content from './views/layouts/Content'
import Footer from './views/layouts/Footer'
export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    Content,
    Footer,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}
</style>



