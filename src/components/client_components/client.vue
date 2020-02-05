<template>
  <div>
    <body>
      <modal1
        v-show="isModalVisible"
        @close="closeModal"
      >
        <transition name="modal1">
          <div class="modal-mask1">
            <div class="modal-container1">
              <div class="modal-header1">
                <h3>
                  Шинэ Сурагч
                </h3>
              </div>
              <div class="modal-body1">
                <form>
                  Нэр:<br>
                  <input
                    v-model="newUser.username"
                    type="text"
                    name="firstname"
                  ><br>
                  Нууц Үг:<br>
                  <input
                    v-model="newUser.password"
                    type="text"
                    name="firstname"
                  >
                </form>
              </div>
              <div class="modal-footer">
                <a
                  type="button"
                  class="btn btn-success"
                  @click="addUser()"
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
        </transition>
      </modal1>
      <modal1
        v-show="isModalVisible1"
        @close="closeModal1"
      >
        <transition name="modal1">
          <div class="modal-mask1">
            <div class="modal-container1">
              <div class="modal-header1">
                <h3>
                  Маршрут хувиаралах
                </h3>
              </div>
              <div class="modal-body1">
                <form>
                  Автобус:<br>
                  <select
                    class="form-control"
                    @change="changeBus($event)"
                  >
                    <option
                      value=""
                      selected
                      disabled
                    >
                      Choose
                    </option>
                    <option
                      v-for="(bus, index) in buses"
                      :key="index"
                    >
                      {{ bus.licensenumber }}
                    </option>
                  </select><br>
                  Маршрут:<br>
                  <select
                    class="form-control"
                    @change="changeRoute($event)"
                  >
                    <option
                      value=""
                      selected
                      disabled
                    >
                      Choose
                    </option>
                    <option
                      v-for="(route, index) in routes"
                      :key="index"
                    >
                      {{ route.name }}
                    </option>
                  </select>
                </form>
              </div>
              <div class="modal-footer">
                <a
                  type="button"
                  class="btn btn-success"
                  @click="connectRoute()"
                >Хувиаралах</a>
                <button
                  class="modal-default-button"
                  @click="closeModal1()"
                >
                  Хаах
                </button>
              </div>
            </div>
          </div>
        </transition>
      </modal1>
      <div class="top">
        <img src="../assets/logo.png">
        <h1>SCHOOL BUS</h1>
      </div>
      <section>
        <div class="bus">
          <h2>Автобус</h2>
          <button
            type="button"
            class="btn btn-success"
            @click="showModal1()"
          >
            Хувиарлах
          </button>
          <table style="width:100%">
            <tr>
              <th>ID</th>
              <th>Дугаар</th>
              <th>Утас</th>
              <th>Маршрут</th>
            </tr>
            <tr
              v-for="(bus, index) in buses"
              :key="index"
            >
              <td>{{ bus.id }}</td>
              <td>{{ bus.licensenumber }}</td>
              <td>{{ bus.phone }}</td>
              <td>{{ bus.route }}</td>
            </tr>
          </table>
        </div>
        <div class="route">
          <h2>Маршрут</h2>
          <button
            type="button"
            class="btn btn-success"
            @click="showRouteAdd()"
          >
            +
          </button>
          <table style="width:100%">
            <tr>
              <th>Нэр</th>
              <th>Зогсоол</th>
              <th>Өргөрөг</th>
              <th>Уртраг</th>
            </tr>
            <tr
              v-for="(route, index) in routes"
              :key="index"
            >
              <td>{{ route.name }}</td>
              <td>{{ route.stop }}</td>
              <td>{{ route.lat }}</td>
              <td>{{ route.lon }}</td>
            </tr>
          </table>
        </div>
      </section>
      <div class="users">
        <h2>Сурагчид</h2>
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
            <th>Нууц үг</th>
          </tr>
          <tr
            v-for="(user, index) in users"
            :key="index"
          >
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
          </tr>
        </table>
      </div>
    </body>
  </div>
</template>



<script>
import axios from 'axios'
import store from '@/store/store.js';
export default {
  components: {
    // modal1: modal1
    },
    data() {
      return {
        newConnection: {
          bus: '',
          route: '',
        },
        newUser: {
          username: '',
          password: '',
        },
        isModalVisible: false,
        isModalVisible1: false,
        buses: [],
        users: [],
        routes: [],
        }
    },
        computed: {
  titles:function(){
    var titles = [];
    for(var i = 0; i < this.routes.length; i++){
      for(var k = 0; k < this.routes[i].length; k++){
        titles.push(this.routes[i][k].name);
      }
    }
    return titles;
  }
},
    mounted() {
      axios
    .get(`http://68.183.187.255:5000/dash_buses/${store.state.client_name}`)
    .then((response1) => {
      (this.buses = response1.data)
      // eslint-disable-next-line
      console.log(response1);
    },),
      axios
    .get(`http://68.183.187.255:5000/dash_routes/${store.state.client_name}`)
    .then((response2) => {
      (this.routes = response2.data)
      // eslint-disable-next-line
      console.log(response2);
    },),
      axios
    .get(`http://68.183.187.255:5000/dash_users/${store.state.client_name}`)
    .then((response3) => {
      (this.users = response3.data)
      // eslint-disable-next-line
      console.log(response3);
    },)
  },
    methods: { 
      changeBus (event) {
      this.newConnection.bus = event.target.options[event.target.options.selectedIndex].text
    },
      changeRoute (event) {
      this.selectedJobTitle = event.target.options[event.target.options.selectedIndex].text
    },
      connectRoute() {
        if (this.newConnection.bus.length !==0 && this.newConnection.route.length !==0){
      const infopath = 'http://68.183.187.255:5000/dash_users/1';
      axios.post(infopath, {'user': this.newUser, 'username': store.state.client_name})
        .then((response) => {
          // eslint-disable-next-line
          console.error(response);
        })
        .catch((error) => {
        // eslint-disable-next-line
          console.error(error);
        })}
      },
      addUser() {
        if (this.newUser.password.length !==0 && this.newUser.username.length !==0){
      const infopath = 'http://68.183.187.255:5000/dash_users/1';
      axios.post(infopath, {'user': this.newUser, 'username': store.state.client_name})
        .then((response) => {
          // eslint-disable-next-line
          console.error(response);
        })
        .catch((error) => {
        // eslint-disable-next-line
          console.error(error);
        })}
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      showModal1() {
        this.isModalVisible1 = true;
        axios
    // .get(`http://68.183.187.255:5000/dash_routes/${store.state.client_name}`)
    // .then((response2) => {
    //   (this.routes = response2.data)
    //   // eslint-disable-next-line
    //   console.log(response2);
    // },)
      },
      closeModal1() {
        this.isModalVisible1 = false;
      },
      showRouteAdd() {
        this.$router.replace('/route');
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
  height: 65px;
  width: 120px;
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
/* Style page content */
.bus {
  margin-left: 1%; /* Same as the width of the sidebar */
  margin-right: 0%;
  padding: 0px 10px;
  width: 48.5%;
  height: 400px;
  float: left;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
}
.bus h2 {
  margin: 10px 3px 9px 3px;
  float: left;
}
.bus button {
  background-color: rgb(255, 193, 7);
  border: none;
  margin: 10px 1px 9px 3px;
  float: right;
  color: black;
}
.bus button:hover {
  background-color: purple;
}
.bus button:focus {
  background-color: purple!important;
  outline: none;
  box-shadow: none!important;
}
.route {
  margin-right: 1%;
  padding: 0px 10px 10px 10px;
  width: 48.5%;
  height: 400px;
  float: right;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
  overflow: auto;
}
.route h2 {
  float: left;
  margin: 10px 3px 9px 3px;
}
.route button {
  background-color: rgb(255, 193, 7);
  border: none;
  margin: 10px 3px 9px 3px;
  float: left;
  color: black;
}
.route button:hover {
  background-color: purple;
}
.route button:focus {
  background-color: purple!important;
  outline: none;
  box-shadow: none!important;
}
.users{
  padding: 0px 10px 10px 10px;
  height: 100%;
  width: 98%;
  border: solid rgb(214, 214, 214);
  border-width: 1px;
  background-color: white;
  margin-left: 1%;
  margin-top: 1%;
}
.users h2 {
  float: left;
  margin: 10px 3px 9px 3px;
}
.users button {
  background-color: rgb(255, 193, 7);
  border: none;
  margin: 10px 3px 9px 10px;
  float: left;
  color: black;
}
.users button:focus {
  background-color: purple!important;
  outline: none;
  box-shadow: none!important;
}
.modal-footer1 a {
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
.modal-footer1 button {
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
.modal-footer1 a:hover {
  background-color: purple;
}
.modal-footer1 button:hover {
  background-color: purple;
}
.modal-body1 input {
  margin: 5px 0px;
}
.modal-mask1 {
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
.modal-container1 {
  width: 400px;
  height: 310px;
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

.modal-body1 {
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


