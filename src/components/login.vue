<template>
  <div class="my-login-page">
    <section class="h-100">
      <div class="container h-100">
        <div class="row justify-content-md-center">
          <div class="col-md-7 col-lg-5">
            <div class="center">
              <img src="./assets/logo.png" width="450" />
            </div>
            <div class="card fat">
              <div class="card-body">
                <h4 class="card-title">Нэвтрэх</h4>
                <form action="/">
                  <div class="form-group">
                    <label for="email">Нэр үг</label>
                    <input
                      id="email"
                      type="text"
                      v-model="login.email"
                      class="form-control"
                      autofocus
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Нүүц үг</label>
                    <input
                      id="password"
                      type="password"
                      v-model="login.password"
                      class="form-control"
                      data-eye />
                  </div>
                  <div class="form-group"></div>
                  <div class="form-group no-margin">
                    <button type="button" @click="onLogin()"
                    class="btn btn-primary btn-block"> Нэвтрэх</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
body {
  background-color: orange;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      response: '',
    };
  },
  methods: {
    onLogin() {
      const path = `http://localhost:5000/dash_login/${this.login.email}/${this.login.password}`;
      axios.get(path)
        .then((res) => {
          if (res.data === 'admin') {
            this.$store.commit('setAdmin', true);
            this.$router.replace('/admin');
          }
          // eslint-disable-next-line
          console.log(res);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    onSubmit() {

    },
  },
  mounted() {
    document.title = 'School-Bus';
  },
};
</script>
