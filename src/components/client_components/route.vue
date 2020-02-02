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
                    Зогсоол
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
                  <a
                    type="button"
                    class="btn btn-success"
                    @click="addStop()"
                  >Нэмэх</a>
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
          <input 
            v-model="route_name"
            type="text"
            name="Маршруутын Нэр"
            placeholder="Маршруутын Нэр"
          >
          <table>
            <tr>
              <th>Нэр</th>
              <th>Өргөрөг</th>
              <th>Уртраг</th>
            </tr>
            <tr
              v-for="(route, index) in routes"
              :key="index"
            >
              <td>{{ route.name }}</td>
              <td>{{ route.lat }}</td>
              <td>{{ route.lon }}</td>
            </tr>
          </table>
          <button
            type="button"
            class="btn btn-success"
            @click="showModal()"
          >
            Зогсоол Нэмэх
          </button>
          <a
            type="button"
            class="btn btn-success"
            @click="addRoute()"
          >Маршрут Нэмэх</a>
        </div>
      </section>
    </body>
  </div>
</template>



<script>
import axios from 'axios'
import store from '@/store/store.js';

export default {
    data() {
      return {
        isModalVisible: false,
        routes: [],
        route_name: '',
        stop: {
          lon: '',
          lat: '',
          name: '',
        }
        }
    },
    methods: {
      cloneRoute(route) {
    var clone ={};
    for( var key in route ){
        if(route.hasOwnProperty(key))
            clone[key]=route[key];
    }
    return clone;
},
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      addStop() {
        if (this.stop.name.length !==0 && this.stop.lon.length !==0 && this.stop.lat.length !==0) {
          var clone = this.cloneRoute(this.stop);
          this.routes.push(clone);
          this.isModalVisible = false;
        }
      },
      addRoute() {
      const infopath = 'http://localhost:5000/dash_routes/1';
      axios.post(infopath, {'route': this.routes, 'username': store.state.client_name, 'route_name': this.route_name})
        .then((response) => {
          // eslint-disable-next-line
          console.error(response);
        })
        .catch((error) => {
        // eslint-disable-next-line
          console.error(error);
        });
      }
    },
};
</script>

<style>

* {
  box-sizing: border-box;
}
.addroute table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 5px 10px;
}
.addroute input{
  margin: 6px;
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
  margin: 1%;
  padding: 10px;
  width: 96%;
  height: 100%;
  float: right;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
  overflow: auto;
}
.addroute h2 {
  margin: 5px;
}
.addroute button {
  margin: 5px;
  background-color: rgb(255, 193, 7);
  border: none;
  color: black;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.addroute button:hover {
  background-color: purple;
}
.addroute a {
  float: right;
  margin: 5px;
  background-color: rgb(255, 193, 7);
  border: none;
  color: black;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.addroute a:hover {
  background-color: purple;
}
.modal-footer a {
  float: left;
  margin: 5px;
  background-color: rgb(255, 193, 7);
  border: none;
  color: black;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.modal-footer button {
  float: right;
  margin: 5px;
  background-color: rgb(255, 193, 7);
  border: none;
  color: black;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.modal-footer a:hover {
  background-color: purple;
}
.modal-footer button:hover {
  background-color: purple;
}
.modal-body input {
  margin: 5px 0px;
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
  color: black;
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
