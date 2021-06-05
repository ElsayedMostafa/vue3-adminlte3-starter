<template>
  <NavBar></NavBar>
  <side-bar></side-bar>
  <Content></Content>
  <Footer></Footer>
</template>
<script>
import NavBar from './adminlte/layouts/NavBar'
import SideBar from './adminlte/layouts/SideBar'
import Content from './adminlte/layouts/Content'
import Footer from './adminlte/layouts/Footer'

export default {
  name: 'Master',
  data(){
    return {
      appElement:'',
    }
  },
  components: {
    NavBar,
    SideBar,
    Content,
    Footer,
  },
  mounted() {
    this.appElement = document.getElementById('app');
    this.appElement.classList.add('sidebar-mini');
    this.appElement.classList.add('layout-fixed');
  },

  unmounted() {
    this.appElement.classList.remove('sidebar-mini');
    this.appElement.classList.remove('layout-fixed');
  }


}
</script>




