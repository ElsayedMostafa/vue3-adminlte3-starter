<template>
  <div class="login-box">
    <!-- /.login-logo -->
    <div class="card card-outline card-primary">
      <div class="card-header text-center">
        <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
      </div>
      <div class="card-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form @submit.prevent="login">
          <div class="input-group mb-3">
            <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="form.email"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="form.password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember"/>
                <label for="remember"> Remember Me </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button
                  type="submit"
                  class="btn btn-primary btn-block"

              >
                Sign In
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>


      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>

</template>
<script>
import {mapActions} from 'vuex'

export default {

  name: 'login',
  data() {
    return {
      appElement: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
    }),
    login() {
      this.signIn(this.form)
          .then(() => {
            this.$router.replace({
              name: 'Dashboard',
            })
          })
          .catch(() => {
            console.log("failed");
          })
    }
  },
  mounted() {
    this.appElement = document.getElementById('app');
    this.appElement.classList.remove('wrapper');
    document.body.classList.add('login-page');
  },

  unmounted() {
    this.appElement.classList.add('wrapper');
    document.body.classList.remove('login-page');
  }


}
</script>


