<template>
  <div>
    <body>
      <modal
        v-show="isModalVisible"
        @close="closeModal"
      >
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-header">
                  <h3>
                    Маршрут Нэмэх
                  </h3>
                </div>

                <div class="modal-body">
                  <form>
                    Нэр:<br>
                    <input
                      v-model="stop.name"
                      type="text"
                      name="firstname"
                    ><br>
                    Өргөрөг:<br>
                    <input
                      v-model="stop.lat"
                      type="text"
                      name="firstname"
                    ><br>
                    Уртраг:<br>
                    <input
                      v-model="stop.lon"
                      type="text"
                      name="lastname"
                    >
                  </form>
                </div>

                <div class="modal-footer">
                  <button
                    class="modal-default-button"
                    @click="addRoute()"
                  >
                    Нэмэх
                  </button>
                  <button
                    class="modal-default-button"
                    @click="closeModal()"
                  >
                    Хаах
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </modal>
      <div class="top">
        <img src="../assets/logo.png">
        <h1>SCHOOL BUS</h1>
      </div>
      <section>
        <div class="addroute">
          <h2>Маршрут</h2>
          <button
            type="button"
            class="btn btn-success"
            @click="showModal()"
          >
            +
          </button>
          <table style="width:100%">
            <tr>
              <th>Нэр</th>
              <th>Өргөрөг</th>
              <th>Уртраг</th>
            </tr>
            <tr
              v-for="route in routes"
              :key="route"
            >
              <td>{{ route.stop }}</td>
              <td>{{ route.lat }}</td>
              <td>{{ route.lon }}</td>
            </tr>
          </table>
        </div>
      </section>
    </body>
  </div>
</template>



<script>
// import axios from 'axios'
// import store from '@/store/store.js';

export default {
    data() {
      return {
        isModalVisible: false,
        routes: [],
        stop: {
          lon: '',
          lat: '',
          name: '',
        }
        }
    },
    mounted() {
  },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      close() {
        this.$emit('close');
      },
      addRoute(){
        this.$store.commit('setStop', this.stop);
        this.$emit('close');
      }  
    },
};
</script>

<style>

* {
  box-sizing: border-box;
}
table {
  overflow: auto;
}
th, td {
  text-align: left;    
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
}
body {
  background-color: rgb(240, 240, 240)
}
.top img {
  float: left;
  width: 8.5%;
}
h1 {
  color: white;
  text-align: center;
  margin: 8px;
  padding-right: 10%
}
.top {
  z-index: 1;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 193, 7);
  position: fixed;
}
section {
  margin-top: 80px;
}
section:after {
  content: "";
  display: table;
  clear: both;
}
.addroute {
  margin-right: 1%;
  padding: 10px 10px;
  width: 96%;
  height: 100%;
  float: right;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
  overflow: auto;
}
.addroute h2 {
  float: left;
  margin: 5px;
}
.addroute button {
  margin: 10px;
  float: left;
}
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-container {
  width: 500px;
  height: 500px;
  margin: 10px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-footer {
    margin-bottom: 10px;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
