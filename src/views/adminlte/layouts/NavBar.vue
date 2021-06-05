<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="nav-link" role="button" @click="tonToggleMenuSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->

    </ul>
  </nav>
</template>


<script>
export default {
  data(){
    return{

    };
  },
  methods:{
    tonToggleMenuSidebar(){
      const el = document.getElementById('app');
      const isCollapsed = el.classList.contains('sidebar-collapse');
      if(isCollapsed){
        el.classList.remove('sidebar-collapse');
      }else{
        el.classList.add('sidebar-collapse');
      }
    },
  },
  mounted() {

  }
}
</script>