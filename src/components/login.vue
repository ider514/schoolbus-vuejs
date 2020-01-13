<template>
  <div class="my-login-page">
    <section class="h-100">
      <div class="container h-100">
        <div class="row justify-content-md-center">
          <div class="col-md-7 col-lg-5">
            <div class="center">
              <img
                src="./assets/logo.png"
              >
            </div>
            <div class="card fat">
              <div class="card-body">
                <h4 class="card-title">
                  Нэвтрэх
                </h4>
                <form>
                  <div class="form-group">
                    <label for="email">Нэр үг</label>
                    <input
                      id="email"
                      v-model="login.email"
                      type="text"
                      required
                      class="form-control"
                      autofocus
                    >
                  </div>
                  <div class="form-group">
                    <label for="password">Нүүц үг</label>
                    <input
                      id="password"
                      v-model="login.password"
                      type="password"
                      required
                      class="form-control"
                      data-eye
                    >
                  </div>
                  <div class="form-group" />
                  <div class="form-group no-margin">
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                      @click="onSubmit()"
                    >
                      Нэвтрэх
                    </button>
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
.center {
  margin: auto
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
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
  mounted() {
    document.title = 'School-Bus';
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
          if (res.data === 'success') {
            this.$store.commit('setClient', true);
            this.$store.commit('setName', this.login.email);
            this.$router.replace('/client');
            const infopath = `http://localhost:5000/get_info/${this.login.email}`;
            axios.get(infopath)
              .then((response) => {
                this.$store.commit('setInfo', response.data);
              });
            // eslint-disable-next-line
            console.log('logged');
          }
          if (res.data === 'error') {
            // eslint-disable-next-line
          console.log(error);
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
      if (this.login.email !== '' && this.login.password !== '') {
        this.onLogin();
      }
    },
  },
};
</script>
