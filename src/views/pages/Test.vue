<template>
  <h1>{{ user.username }}</h1>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user:'auth/user'
    })
  },
  mounted() {
    console.log("test page")
  }
}
</script>